import React, { useRef, useState, useEffect } from "react"

function VideoContainer() {
  // Replace this with your actual video URL
  const videoURL = ""

  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  // Play or pause the video
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Update the current time as the video plays
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(videoRef.current.currentTime)
    }
    videoRef.current.addEventListener("timeupdate", updateTime)
    return () => {
      videoRef.current.removeEventListener("timeupdate", updateTime)
    }
  }, [])

  // Update the duration of the video when it's loaded
  useEffect(() => {
    const updateDuration = () => {
      setDuration(videoRef.current.duration)
    }
    videoRef.current.addEventListener("loadedmetadata", updateDuration)
    return () => {
      videoRef.current.removeEventListener("loadedmetadata", updateDuration)
    }
  }, [])

  return (
    <div className="">
      <div className="">
        <div className="flex flex-col">
          <video
            ref={videoRef}
            src={videoURL}
            title="Video Player"
            className="rounded-lg"
            controls
          ></video>

          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <button
                onClick={togglePlay}
                className="text-gray-600 hover:text-blue-500 focus:outline-none"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <div className="ml-2 text-gray-600">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
                Volume
              </button>
              <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Function to format time in HH:MM:SS format
function formatTime(time) {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`
}

export default VideoContainer
