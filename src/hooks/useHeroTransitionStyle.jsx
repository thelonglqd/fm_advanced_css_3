export const useHeroTransitionStyle = ({
  tracks,
  currentTrackIdx,
  transitionEnable,
}) => ({
  transform: `translateX(-${(currentTrackIdx / tracks.length) * 100}%)`,
  transition: transitionEnable
    ? `transform 0.3s ease-in-out`
    : 'none',
})
