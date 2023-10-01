import React from "react"

const HowItWorks = () => {
  return (
    <section>
      <div className="paddings py-[120px] space-y-20">
        <h2 className="text-4xl text-black-header-color text-center space-y-2">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="flex flex-col items-center gap-3 flex-wrap">
            <img src="/Icon (1).svg" alt="" width={40} />
            <h3 className="font-inter font-semibold text-2xl text-blue-header-color">
              Record Screen
            </h3>
            <p className="font-worksans font-normal text-lg text-grey-text-color">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src="/rec-1.cb7888a47e24214aeb105805426a8300.svg.png" alt="" />
          </div>
          <div className="flex flex-col items-center gap-3 flex-wrap">
            <img src="/Icon (2).svg" alt="" width={40} />
            <h3 className="font-inter font-semibold text-2xl text-blue-header-color">
              Record Screen
            </h3>
            <p className="font-worksans font-normal text-lg text-grey-text-color">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src="/rec-1.cb7888a47e24214aeb105805426a8300.svg.png" alt="" />
          </div>
          <div className="flex flex-col items-center gap-3 flex-wrap">
            <img src="/Icon (3).svg" alt="" width={40} />
            <h3 className="font-inter font-semibold text-2xl text-blue-header-color">
              Record Screen
            </h3>
            <p className="font-worksans font-normal text-lg text-grey-text-color">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src="/rec-1.cb7888a47e24214aeb105805426a8300.svg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
