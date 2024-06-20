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
    <div className="flex items-center justify-end w-full min-w-4 p-4">
      <div
        className={`overflow-hidden bg-white shadow-lg rounded-xl transition-all duration-300 ease min-h-14 max-h-18 ${
          isOpen ? "w-full" : "w-0"
        }`}
      >
        <div className={`flex justify-center items-center m-2 ${isOpen ? "block" : "hidden"} overflow-x-auto`}>
          <ClubListItem clubs={clubs} />
        </div>
      </div>
      <div className="flex-shrink-0 ml-2">
        <button onClick={toggleCollapse} className="bg-blue-500 text-white px-4 py-2 rounded-xl">
          구단 선택
        </button>
      </div>
    </div>
  );
}

export default ClubList;
