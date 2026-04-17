import arrowLeft from '../../assets/images/icon-angle-left.svg'
import arrowRight from '../../assets/images/icon-angle-right.svg'

export const ControlButtons = ({ onPrev, onNext }) => {
  return (
    <div
      className={`px-6 py-8 bg-black flex absolute bottom-0 right-0 lg:bottom-0 z-10 lg:left-full lg:right-auto items-center justify-center gap-12 md:gap-24 lg:gap-16 md:w-[calc(100%*1/4)]`}>
      <button
        onClick={onPrev}
        className=" cursor-pointer flex"
        type="button">
        <img
          className="w-3.5 h-5 flex-none lg:w-5 lg:h-7"
          src={arrowLeft}
          alt=""
        />
      </button>
      <button
        onClick={onNext}
        className="cursor-pointer flex"
        type="button">
        <img
          className="w-3.5 h-5 flex-none lg:w-5 lg:h-7"
          src={arrowRight}
          alt=""
        />
      </button>
    </div>
  )
}
