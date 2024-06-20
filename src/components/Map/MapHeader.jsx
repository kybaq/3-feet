import React from "react";
import ClubList from "./ClubList";
import { Link } from "react-router-dom";

function MapHeader() {
  return (
    <header
      id="header"
      className="flex justify-between items-center bg-gray-300 border border-slate-300 rounded-lg w-full h-24 mb-4"
    >
      <div className="w-1/3">
        <Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">홈</button>
        </Link>
      </div>
      <div className="w-2/3">
        <ClubList />
      </div>
    </header>
  );
}

export default MapHeader;
