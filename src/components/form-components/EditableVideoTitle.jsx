import React, { useState } from "react"

function EditableVideoTitle() {
  const [videoURL, setVideoURL] = useState("videourltitle")

  const handleURLChange = (e) => {
    setVideoURL(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can handle form submission logic here, e.g., send data to the server
    console.log("Video Title/URL:", videoURL)
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          htmlFor="videoURL"
          className=" text-[#727272] font-medium text-base"
        >
          Name
        </label>
        <div className="flex flex-wrap py-2 rounded-xl">
          <input
            type="text"
            id="videoURL"
            className="focus:outline-none text-2xl font-semibold text-[#413C6D]"
            value={videoURL}
            onChange={handleURLChange}
            required
          />
          <button type="submit" className="bg-white min-w-fit">
            <img src="/edit.svg" alt="" className="" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditableVideoTitle
