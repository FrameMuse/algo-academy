import "./Video.scss"

import Icon from "../Icon/Icon"

interface VideoProps {
  src?: string
}

function Video(props: VideoProps) {
  return (
    <div className="video-block">
      <div className="video-block-padding"></div>
      <div className="video-block-frame">
        <video src={props.src} controls></video>
      </div>
      <div className="video-block-preview active">
        <div className="preview">
          <img src="img/video1.jpg" alt="" />
        </div>
        <div className="video-block-button">
          <Icon name="play-circle" />
        </div>
      </div>
    </div>
  )
}

export default Video
