import React from "react"

const Footer = () => {
  return (
    <section className="bg-primary-color">
      <div className="paddings py-[100px] flex flex-col sm:justify-between sm:flex-row gap-5 flex-wrap">
        <img src="/logo.svg" alt="" className="w-fit" />
        <div className="  text-white">
          <h3 className="footer-head">Menu</h3>
          <p className="footer-p">Home</p>
          <p className="footer-p">Converter</p>
          <p className="footer-p">How It Works</p>
        </div>
        <div className="  text-white">
          <h3 className="footer-head">About Us</h3>
          <p className="footer-p">About</p>
          <p className="footer-p">Contact Us</p>
          <p className="footer-p">Private Policy</p>
        </div>
        <div className="  text-white">
          <h3 className="footer-head">Screen Record</h3>
          <p className="footer-p">Browser Window</p>
          <p className="footer-p">Desktop</p>
          <p className="footer-p">Application</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
