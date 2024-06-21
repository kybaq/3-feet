import { Link } from "react-router-dom";
import ClubList from "./ClubList";

function MapHeader() {
  return (
    <header
      id="header"
      className="flex justify-between items-center w-full h-24 mb-4 bg-gray-300 border border-slate-300 rounded-xl"
    >
      <div className="w-1/12">
        <Link to="/">
          <button className="bg-blue-500 text-white ml-4 px-4 py-2 rounded-xl">홈</button>
        </Link>
      </div>
      <div className="w-11/12">
        <ClubList />
      </div>
    </header>
  );
}

export default MapHeader;
