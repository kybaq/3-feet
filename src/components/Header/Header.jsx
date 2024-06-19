import React from "react";
import threeFeetLogo from "./../../assets/threeFeetLogo.png";
import myPageIcon from "./../../assets/myPageIcon.png";

function Header() {
  return (
    <header className="bg-blue-200 flex items-center justify-center h-[64px] w-[1920px]">
      <center className="flex items-center justify-between h-[64px] w-[1320px]">
        <div className="flex items-center">
          <img src={threeFeetLogo} alt="logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-2xl">쓰리피트</span>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-700 text-white px-4 py-1 rounded-[10px] mr-4 hover:bg-blue-900 transition duration-200">
            로그인
          </button>
          <img src={myPageIcon} alt="user" className="h-6 w-6" />
        </div>
      </center>
    </header>
  );
}

export default Header;
