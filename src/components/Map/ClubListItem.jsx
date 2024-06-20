import React from "react";
import useSelectedClubStore from "../../store/useSelectedClubStore";

function ClubListItem({ clubs }) {
  const setSelectedClubId = useSelectedClubStore((state) => state.setSelectedClubId);

  return (
    <>
      {clubs &&
        clubs.map((club) => {
          return (
            <div
              key={club.id}
              className="flex w-full justify-center items-center list-none px-4 hover:bg-black-300 hover:bg-opacity-40
    focus:ring focus:ring-blue-600 "
            >
              <button onClick={() => setSelectedClubId(club.id)}>
                <img className="object-fill min-h-8 min-w-10 my-1" src={`${club.logo_url}`} alt="" />
              </button>
            </div>
          );
        })}
    </>
  );
}

export default ClubListItem;
