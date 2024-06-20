import useSelectedClubStore from "../../store/useSelectedClubStore";

function IconButton({ src, clubId }) {
  const { setSelectedClubId } = useSelectedClubStore();

  return (
    <button
      className="relative bg-gray-400 bg-opacity-50 rounded-[10px]  flex justify-center items-center mx-4 mt-3 p-4 w-[85%] h-[85%] shadow-md 
    hover:bg-black-300 hover:bg-opacity-40
    focus:ring focus:ring-blue-600"
      onClick={() => setSelectedClubId(clubId)}
    >
      <img src={src} className="inset-0 z-10  " />
    </button>
  );
}

export default IconButton;
