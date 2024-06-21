function DuplicateCheckButton({ onClick }) {
  return (
    <button
      type="button"
      className="absolute right-2 top-2 bottom-2 bg-blue-100 px-3 py-1 rounded-[10px] border-[1.5px] border-blue-500 hover:bg-blue-300 transition duration-200"
      onClick={onClick}
    >
      중복확인
    </button>
  );
}

export default DuplicateCheckButton;
