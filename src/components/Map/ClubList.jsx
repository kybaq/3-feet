import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchClubs } from "../../apis/supabase/supabase.api";
import ClubListItem from "./ClubListItem";

function ClubList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const {
    data: clubs,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["clubs"],
    queryFn: fetchClubs,
  });

  if (isPending) {
    return <div>로딩 중..</div>;
  }

  if (isError) {
    return <div>오류 발생</div>;
  }

  return (
    <div className="w-full p-4 flex items-center justify-end">
      <div
        className={`overflow-auto bg-white shadow-lg rounded transition-all duration-300 ease ${
          isOpen ? "w-full" : "w-0"
        }`}
      >
        <div className={`flex justify-center items-center m-2 p-2 ${isOpen ? "block" : "hidden"}`}>
          <ClubListItem clubs={clubs} />
        </div>
      </div>
      <div className="flex-shrink-0 ml-2">
        <button onClick={toggleCollapse} className="bg-blue-500 text-white px-4 py-2 rounded">
          구단 선택
        </button>
      </div>
    </div>
  );
}

export default ClubList;
