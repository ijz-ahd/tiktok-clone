import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./video.css";

function Video({ url, channel, desc, song, likes, messages, shares }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideo}
        ref={videoRef}
        className="video_player"
        loop
        src={url}
      ></video>
      <VideoFooter channel={channel} desc={desc} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
