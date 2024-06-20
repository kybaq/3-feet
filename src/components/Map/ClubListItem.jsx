import React from "react";
import useSelectedClubStore from "../../store/useSelectedClubStore";

function ClubListItem({ clubs }) {
  const setSelectedClub = useSelectedClubStore((state) => state.setSelectedClub);

  return (
    <>
      {clubs &&
        clubs.map((club) => {
          return (
            <div
              key={club.id}
              className="flex justify-center items-center list-none px-4 hover:bg-black-300 hover:bg-opacity-40
    focus:ring focus:ring-blue-600"
            >
              <button onClick={() => setSelectedClub(club.id)}>
                <img className="h-8 w-10 my-1" src={`${club.logo_url}`} alt="" />
              </button>
            </div>
          );
        })}
    </>
  );
}

export default ClubListItem;
