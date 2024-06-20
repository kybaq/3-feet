import useSelectedClubStore from "../../store/useSelectedClubStore";

function ClubListItem({ clubs }) {
  const { setSelectedClubId } = useSelectedClubStore();

  return (
    <>
      {clubs &&
        clubs.map((club) => {
          return (
            <div
              key={club.id}
              className="flex justify-center items-center list-none w-16 h-16 mx-8 hover:bg-black-300 hover:bg-opacity-40
    focus:ring focus:ring-blue-600 rounded-xl"
            >
              <button onClick={() => setSelectedClubId(club.id)}>
                <img className="object-fill min-h-4 min-w-6 max-h-12 max-w-16" src={`${club.logo_url}`} alt="" />
              </button>
            </div>
          );
        })}
    </>
  );
}

export default ClubListItem;
