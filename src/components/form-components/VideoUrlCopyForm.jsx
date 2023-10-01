import React, { useState } from "react"

function VideoUrlCopyForm() {
  const [videoUrl, setVideoUrl] = useState("video12345")
  const [copied, setCopied] = useState(false)

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value)
  }

  const handleCopyButtonClick = () => {
    const textArea = document.createElement("textarea")
    textArea.value = videoUrl
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
    setCopied(true)
  }

  return (
    <form className="flex flex-col  ">
      <label
        htmlFor="videoUrl"
        className="text-black-header-color font-semibold text-xl mb-2"
      >
        Video URL
      </label>
      <div className="flex px-3 py-2 rounded-xl border border-[#929292]">
        <input
          type="text"
          id="videoUrl"
          name="videoUrl"
          className="px-2 py-2 outline-none font-worksans font-normal text-lg w-full"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={handleVideoUrlChange}
        />
        <button
          onClick={handleCopyButtonClick}
          className="flex gap-2 text-form-btn  bg-white font-semibold py-2 px-5 border-[0.5px] border-primary-color rounded-lg"
        >
          <img src="/Icon (copy).svg" alt="" />
          Copy
        </button>
      </div>

      {copied && (
        <p className="mt-2 text-green-500 font-semibold">URL Copied!</p>
      )}
    </form>
  )
}

export default VideoUrlCopyForm
