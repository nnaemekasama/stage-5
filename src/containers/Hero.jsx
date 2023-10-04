import React from "react"

const Hero = () => {
  return (
    <section className="relative">
      <img
        src="/lightgrid.svg"
        alt=""
        className="absolute -z-10 top-80 left-[42rem]"
      />
      <img
        src="/grid.136a9256d16888900db0.svg.png"
        alt=""
        className="absolute -z-10 right-10 top-20"
      />
      <div className="paddings py-[130px] flex flex-col items-start lg:flex-row md:items-center max-sm:justify-around justify-between gap-12 md:gap-2 z-40">
        <div className="space-y-10 w-full lg:w-1/2">
          <div className="space-y-2">
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl text-black-header-color ">
              Show Them <br /> Don’t Just Tell
            </h1>
            <p className="font-normal text-lg font-inter">
              Help your friends and loved ones by creating and sending <br />{" "}
              videos on how to get things done on a website.
            </p>
          </div>

          <button className="px-4 py-3 flex items-center gap-2">
            Install HelpMeOut <img src="/arrow-right.svg" alt="" />
          </button>
        </div>
        <div className="flex flex-col gap-3 justify-between sm:flex-row w-full md:w-1/2 transform scale-100 sm:scale-[0.8] md:scale-[0.8] lg:scale-[0.7] xl:scale-100">
          <div className="flex flex-col justify-between gap-2 flex-shrink-0">
            <img
              src="/AdobeStock_400053098 1.png"
              alt=""
              className="rounded-lg "
            />
            <img
              src="/AdobeStock_362497671 1.png"
              alt=""
              className="rounded-lg "
            />
          </div>
          <img
            src="/woman-using-smartphone-technology 2.png"
            alt=""
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
