import VideoLego from "../../assets/video/video-lego.mp4";
import Muted from "./Muted";
import Unmuted from "./Unmuted";
import { useState } from "react";

import "./styles.scss";
import Download from "./Download";

const Video = () => {
  const [muted, setMuted] = useState(true);

  return (
    <>
      <div className="video-container" id="1">
        <video width="100%" height="auto" autoPlay loop muted={muted}>
          <source src={VideoLego} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-subcontent">
          <h2>Welcome to the Play Matters Interactive Lookbook</h2>
          <div className="controllers">
            <button className="mute" onClick={() => setMuted(!muted)}>
              {
                muted ? <Muted /> : <Unmuted />
              }
            </button>
            <a href={VideoLego} download className="download">
              <Download />
            </a>
          </div>
        </div>
        <div className="scroll-down">
          <p>Scroll down</p>
          <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrows-down">
            <g filter="url(#filter0_d_1205_9494)">
              <path d="M9 16L14 21L19 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 9L14 14L19 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <filter id="filter0_d_1205_9494" x="-6" y="-5" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1205_9494" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1205_9494" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <h2 className="video-h2-mobile">
        Welcome to the Play Matters Interactive Lookbook
      </h2>
    </>
  )
};

export default Video;