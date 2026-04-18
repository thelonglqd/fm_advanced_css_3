import arrowIcon from '../../assets/images/icon-arrow.svg'

export const ShopNowButton = () => {
  return (
    <a
      className="px-12 gap-8 w-full flex items-center"
      href="#">
      <span className="block text-preset-4">SHOP NOW</span>
      <img
        className="h-4 w-16 lg:h-2 lg:w-8"
        src={arrowIcon}
        alt=""
      />
    </a>
  )
}
