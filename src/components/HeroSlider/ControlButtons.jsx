import arrowLeft from '../../assets/images/icon-angle-left.svg'
import arrowRight from '../../assets/images/icon-angle-right.svg'

export const ControlButtons = ({ onPrev, onNext }) => {
  return (
    <section
      className={`bg-black flex absolute bottom-0 right-0 xl:bottom-0 z-10 xl:left-full xl:right-auto items-center justify-between xl:w-[calc(100%*1/4)]`}>
      <button
        aria-label="previous"
        onClick={onPrev}
        className="px-8 py-6 cursor-pointer flex justify-center flex-1"
        type="button">
        <img
          className="w-3.5 h-5 lg:w-5 lg:h-7"
          src={arrowLeft}
          alt="left arrow icon"
        />
      </button>
      <button
        aria-label="next"
        onClick={onNext}
        className="px-8 py-6 cursor-pointer flex justify-center flex-1"
        type="button">
        <img
          className="w-3.5 h-5 lg:w-5 lg:h-7"
          src={arrowRight}
          alt="right arrow icon"
        />
      </button>
    </section>
  )
}
