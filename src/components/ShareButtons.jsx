import React from "react"
export function ShareButtons({}) {
  return (
    <div className="space-y-3">
      {" "}
      <h3 className="font-semibold text-base font-inter">Share Your Video</h3>
      <div className="flex flex-wrap gap-3">
        <button className="flex gap-3 bg-white font-inter text-base font-medium tracking-wide py-2 px-4 text-[#0A0628] border border-[#0A0628] rounded">
          <img src="/fb.svg" alt="" /> Facebook
        </button>
        <button className="flex gap-3 bg-white font-inter text-base font-medium tracking-wide py-2 px-4 text-[#0A0628] border border-[#0A0628] rounded">
          <img src="/whatsapp.svg" alt="" /> Whatsapp
        </button>
        <button className="flex gap-3 bg-white font-inter text-base font-medium tracking-wide py-2 px-4 text-[#0A0628] border border-[#0A0628] rounded">
          <img src="/telegram.svg" alt="" /> Telegram
        </button>
      </div>
    </div>
  )
}
