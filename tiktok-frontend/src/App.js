import React, { useEffect, useState } from "react";
import Video from "./components/Video";
import axios from "./axios";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      console.log(response.data);

      return response;
    };
    fetchPost();
  }, []);

  return (
    <div className="app">
      <div className="app_videos">
        {videos?.map(
          ({ _id, url, channel, desc, song, likes, shares, messages }) => (
            <Video
              key={_id}
              url={url}
              channel={channel}
              desc={desc}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
