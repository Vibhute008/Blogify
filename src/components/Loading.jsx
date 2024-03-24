import React from "react";
import Loader from "../assets/Loader.gif";

function Loading() {
  return (
    <div>
      <img src={Loader} alt="" className="flex justify-center items-center" />
    </div>
  );
}

export default Loading;
