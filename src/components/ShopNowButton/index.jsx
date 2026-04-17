import arrowIcon from '../../assets/images/icon-arrow.svg'

export const ShopNowButton = () => {
  return (
    <a
      className="mt-10 px-8 w-full flex justify-between items-center md:gap-8 md:justify-start"
      href="#">
      <span className="block text-preset-4">SHOP NOW</span>
      <img
        className="h-4 w-16"
        src={arrowIcon}
        alt=""
      />
    </a>
  )
}
