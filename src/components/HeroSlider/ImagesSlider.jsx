import { useHeroTransitionStyle } from '../../hooks/useHeroTransitionStyle'
import { ControlButtons } from './ControlButtons'

export const ImagesSlider = ({
  trackIdx,
  tracks = [],
  transitionEnable,
  onTransitionEnd,
  onPrev,
  onNext,
}) => {
  const transitionStyles = useHeroTransitionStyle({
    currentTrackIdx: trackIdx,
    transitionEnable,
    tracks,
  })

  return (
    <div className="relative lg:w-ful lg:col-span-4">
      <div className="overflow-hidden">
        <div
          style={{
            ...transitionStyles,
            width: `${tracks.length * 100}%`,
          }}
          onTransitionEnd={onTransitionEnd}
          className="flex">
          {tracks.map((track, idx) => (
            <div
              className="w-full"
              key={`${idx}-${track.imgSrc}`}>
              <img
                className="w-full"
                src={track.imgSrc}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <ControlButtons
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  )
}
