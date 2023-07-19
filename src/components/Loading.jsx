import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="text-center w-screen text-white font-bold h-screen">
      <div className="grid justify-items-center m-2 p-2">
        <AiOutlineLoading3Quarters size={32} />
      </div>
      Loading...
    </div>
  );
};

export default Loading;
