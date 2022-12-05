import "./Video.scss"

import { useEffect, useRef, useState } from "react"
import { toggleState } from "utils/common"

import Icon from "../Icon/Icon"



interface VideoProps {
  src?: string
  poster?: string
  aspectRatio?: string
}

function Video(props: VideoProps) {
  const [playing, setPlaying] = useState(false)
  const videoElementRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoElementRef.current == null) return

    playing && videoElementRef.current.play()
    !playing && videoElementRef.current.pause()
  }, [playing])

  return (
    <div className="video">
      <video
        className="video__video"
        src={props.src}
        poster={props.poster}
        controls={playing}
        style={{ aspectRatio: props.aspectRatio }}
        ref={videoElementRef}
      >
        {/* <source src="movie.mp4" type="video/mp4" /> */}
        {/* <source src="movie.ogg" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
      <button className="video-play" type="button" hidden={playing} onClick={toggleState(setPlaying)} aria-label="play video">
        <Icon className="video-play__icon" name="play-circle" />
      </button>
    </div >
  )
}

export default Video
