import React from "react";
import "./loading.css";
const Loading = () => {
  return (
    <>
      <div className="global-loading">
        <img
          src="https://i.pinimg.com/originals/01/23/a9/0123a92f4f8c340761b46084af39db3b.gif"
          alt="loading..."
          className="loading-gif"
        />
      </div>
    </>
  );
};

export default Loading;
