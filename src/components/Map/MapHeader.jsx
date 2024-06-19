import React from "react";
import CollpaseButton from "./CollapseButton";

function MapHeader() {
  return (
    <header
      id="header"
      className="flex justify-between items-center bg-gray-300 border border-slate-300 rounded-lg h-20 mb-4"
    >
      {
        // 조건 부 로그인
        <button className="border border-slate-300 hover:border-indigo-300 bg-blue-700 rounded-lg ml-10 p-2">홈</button>
      }

      <ol id="logo">
        {/* <li className="border border-slate-300 rounded-lg mr-10 p-2">다른 구단 보기</li> */}
        <CollpaseButton />
      </ol>
    </header>
  );
}

export default MapHeader;
