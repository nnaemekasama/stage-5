import { ShareButtons } from "../components/ShareButtons"
import React from "react"

import VideoContainer from "../components/VideoContainer"
import EmailForm from "../components/form-components/EmailForm"
import EditableVideoTitle from "../components/form-components/EditableVideoTitle"
import VideoUrlCopyForm from "../components/form-components/VideoUrlCopyForm"
import { Link, useNavigate } from "react-router-dom"

const VideoRecording = () => {
  return (
    <section>
      <div className="paddings py-16 space-y-16">
        <div className="flex flex-col md:flex-row min-w-full gap-8">
          <div className="w-full md:w-1/2 flex flex-col space-y-10">
            <h2 className="text-4xl">Your Video is Ready</h2>
            <EditableVideoTitle />
            <EmailForm />
            <VideoUrlCopyForm />
            <ShareButtons />
          </div>
          <div className="w-full md:w-1/2 md:border-l border-[#BBBBBB] pl-8">
            <VideoContainer />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-7">
          <h2 className="text-center">
            To ensure the availability and privacy of your video,
            <br /> we recommend saving it to your account.
          </h2>
          <button className="py-2 px-4">Save Video</button>
          <p>
            Don’t have an account? <Link to={"/landing"}>Create account</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default VideoRecording
