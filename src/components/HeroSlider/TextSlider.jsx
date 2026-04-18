import { useHeroTransitionStyle } from '../../hooks/useHeroTransitionStyle'
import { useMediaScreen } from '../../hooks/useMediaScreen'
import { ShopNowButton } from '../ShopNowButton'

export const TextSlider = ({
  trackIdx,
  tracks = [],
  transitionEnable,
}) => {
  const transitionStyles = useHeroTransitionStyle({
    currentTrackIdx: trackIdx,
    transitionEnable,
    tracks,
  })

  const { isDesktop } = useMediaScreen()

  return (
    <section className="overflow-hidden lg:relative lg:col-span-3">
      <div
        style={{
          ...transitionStyles,
          width: `${tracks.length * 100}%`,
        }}
        className="flex">
        {tracks.map((track, idx) => (
          <div
            className="w-full p-12"
            key={`${idx}-${track.title}`}>
            <h2 className="text-preset-2">{track.title}</h2>
            <p className="text-gray-500 text-preset-3 mt-4">
              {track.content}
            </p>
          </div>
        ))}
      </div>
      {isDesktop && <ShopNowButton />}
    </section>
  )
}
