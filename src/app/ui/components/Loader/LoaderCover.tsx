import "./Loader.scss"

import Loader from "./Loader"

interface LoaderCoverProps { }

function LoaderCover(props: LoaderCoverProps) {
  return (
    <div className="loader-cover">
      <Loader className="loader-cover__loader" />
    </div>
  )
}

export default LoaderCover
