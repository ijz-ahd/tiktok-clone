import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import "./videoFooter.css";

function VideoFooter({ channel, desc, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{desc}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
