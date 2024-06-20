import React from "react";
import ClubList from "./ClubList";

function MapHeader() {
  return (
    <header
      id="header"
      className="flex justify-between items-center bg-gray-300 border border-slate-300 rounded-lg w-full h-24 mb-4"
    >
      <div className="w-1/3">
        {
          // 조건 부 로그인
          <button className="border border-slate-300 hover:border-indigo-300 bg-blue-700 rounded-lg ml-4 p-2 ">
            홈
          </button>
        }
      </div> 
      <div className="w-2/3">
        <ClubList />
      </div>
    </header>
  );
}

export default MapHeader;
