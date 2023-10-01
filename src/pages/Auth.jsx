import React from "react"

const Auth = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col w-[30rem] py-10 gap-6">
        <div className="text-center space-y-4">
          <h3 className="font-inter font-bold text-3xl tracking-wide">
            Log In or Sign Up
          </h3>
          <p className="font-normal text-sm tracking-wide">
            Join millions of others in sharing successful <br /> moves on
            HelpMeOut.
          </p>
        </div>
        <div className="space-y-5">
          <button className="bg-white border-2 border-black rounded-xl  flex justify-center items-center py-3 gap-4 w-full">
            <img src="/Google svg.svg" alt="" />
            <p className="font-inter font-medium text-lg text-black-header-color tracking-wide">
              Continue with Google
            </p>
          </button>
          <button className="bg-white border-2 border-black rounded-xl  flex justify-center items-center py-3 gap-4 w-full">
            <img src="/Facebook svg.svg" alt="" />
            <p className="font-inter font-medium text-lg text-black-header-color tracking-wide">
              Continue with Facebook
            </p>
          </button>
        </div>

        <div className="flex items-center w-90">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <form className="space-y-8">
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              id="Email"
              placeholder="Enter Your Email"
              className="border-[1px]  border-black w-full py-3 rounded-xl"
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              placeholder="Enter Your Password"
              className="border-[1px]  border-black w-full py-3 rounded-xl"
            />
          </div>
          <button className="w-full py-3">Sign Up</button>
        </form>
      </div>
    </section>
  )
}

export default Auth
