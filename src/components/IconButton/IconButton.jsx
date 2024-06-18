function IconButton({ src }) {
  return (
    <button className=" bg-gray-400 bg-opacity-50 rounded-[10px]  flex justify-center items-center mx-4 mt-3 p-4 w-40 h-40 shadow-md hover:bg-gray-500 focus:ring focus:ring-blue-600">
      <img src={src} className="inset-0 z-10  " />
    </button>
  );
}

export default IconButton;
