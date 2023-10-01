import React, { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { Link } from "react-router-dom"
const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <nav
      className={`sticky z-50 backdrop-blur-[10px] top-0 right-0 left-0 border-b-[1px]   ${
        showNav ? "bg-white" : ""
      }`}
    >
      <div className="py-[12px] paddings flex justify-between items-center">
        <img src="/logo1.svg" alt="" className="w-fit " />
        <ul className="hidden md:flex gap-5 font-worksans text-[16px] font-medium hover:cursor-pointer">
          <li>Features</li>
          <li>How It Works</li>
        </ul>
        <Link to={"/auth"} className="hidden md:flex font-semibold text-lg">
          Get Started
        </Link>

        <BiMenuAltRight
          onClick={toggleNav}
          className="md:hidden text-2xl cursor-pointer text-primary-color"
        />
      </div>
      {showNav && (
        <div className="md:hidden flex flex-col items-center mt-3">
          <div className="font-worksans text-[16px] font-medium mb-4">
            <ul className="text-center">
              <li>Features</li>
              <li>How It Works</li>
            </ul>
          </div>
          <Link to={"/auth"} className="font-semibold text-lg">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
