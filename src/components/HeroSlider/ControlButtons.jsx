import arrowLeft from '../../assets/images/icon-angle-left.svg'
import arrowRight from '../../assets/images/icon-angle-right.svg'

export const ControlButtons = ({ onPrev, onNext }) => {
  return (
    <div
      className={`flex absolute bottom-0 right-0 lg:bottom-0 lg:left-full lg:right-auto lg:flex z-10`}>
      <button
        onClick={onPrev}
        className="bg-black py-6 px-8 cursor-pointer flex"
        type="button">
        <img
          className="w-3.5 h-5 flex-none lg:w-5 lg:h-7"
          src={arrowLeft}
          alt=""
        />
      </button>
      <button
        onClick={onNext}
        className="bg-black py-6 px-8 cursor-pointer flex"
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
