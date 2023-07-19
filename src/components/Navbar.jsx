import React from "react";
import { SiTodoist } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="text-center text-white">
      <h3 className="flex justify-center content-center place-items-center">
        <SiTodoist size={32} className="m-2" />
        <p className="text-lg font-mono font-bold p-0">MyEmojiList</p>
      </h3>
    </div>
  );
};

export default Navbar;
