import aboutDark from '../../assets/images/image-about-dark.jpg'
import aboutLight from '../../assets/images/image-about-light.jpg'

export const AboutSection = () => {
  return (
    <div className="mt-10 lg:mt-0 lg:flex">
      <div className="w-full">
        <img
          className="w-full md:aspect-3/1 lg:h-full"
          src={aboutDark}
          alt=""
        />
      </div>
      <div className="px-8 mt-10 lg:mt-0 lg:p-8">
        <h2 className="text-preset-7">
          ABOUT OUR FURNITURE
        </h2>
        <p className="text-preset-3 text-gray-500 mt-4">
          Our multifunctional collection blends design and
          function to suit your individual taste. Make each
          room unique, or pick a cohesive theme that best
          express your interests and what inspires you. Find
          the furniture pieces you need, from traditional to
          contemporary styles or anything in between.
          Product specialists are available to help you
          create your dream space.
        </p>
      </div>
      <div className="w-full mt-10 lg:mt-0">
        <img
          className="w-full md:aspect-3/1 lg:h-full"
          src={aboutLight}
          alt=""
        />
      </div>
    </div>
  )
}
