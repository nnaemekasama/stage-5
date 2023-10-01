import React from "react"

const Features = () => {
  return (
    <section>
      <div className="paddings py-[80] space-y-20 ">
        <div className="text-center space-y-2">
          <h2 className="text-4xl text-black-header-color">Features</h2>
          <p className="font-worksans text-lg font-normal text-grey-text-color">
            Key Highlights of Our Extension
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-md:gap-8 items-center justify-between">
          <div className="space-y-5 w-full md:w-1/2">
            <div className="flex items-start gap-3">
              <img src="/Icon placeholder circle.svg" alt="" width={40} />
              <div className="flex flex-col items-start ">
                <h3 className="font-inter font-semibold text-2xl text-blue-header-color">
                  Simple Screen Recording
                </h3>
                <p className="font-worksans font-normal text-lg text-grey-text-color">
                  Effortless screen recording for everyone. Record <br /> with
                  ease, no tech expertise required.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src="/Icon placeholder send.svg" alt="" width={40} />
              <div className="flex flex-col items-start ">
                <h3 className="font-inter font-semibold text-2xl text-blue-header-color">
                  Simple Screen Recording
                </h3>
                <p className="font-worksans font-normal text-lg text-grey-text-color">
                  Effortless screen recording for everyone. Record <br /> with
                  ease, no tech expertise required.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src="/Icon placeholder.svg" alt="" width={40} />
              <div className="flex flex-col items-start ">
                <h3 className="font-inter font-semibold text-2xl text-blue-header-color">
                  Simple Screen Recording
                </h3>
                <p className="font-worksans font-normal text-lg text-grey-text-color">
                  Effortless screen recording for everyone. Record <br /> with
                  ease, no tech expertise required.
                </p>
              </div>
            </div>
          </div>
          <img src="/Video Repository.png" alt="" className="w-full md:w-1/2" />
        </div>
      </div>
    </section>
  )
}

export default Features
