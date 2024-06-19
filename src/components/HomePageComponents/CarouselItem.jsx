function CarouselItem({ src, title }) {
  return (
    <div className="flex flex-col items-center bg-slate-500 bg-opacity-50 p-5 rounded-[10px] mx-1 w-[312px] h-[334px]">
      <div className="bg-white mx-6 p-5 w-[276px] max-h-[250px] rounded-[10px]">
        <img src={src} className="w-50 " />
      </div>
      <div className="relative w-[100%]">
        <span className="font-bold absolute mt-4 w-[100%]  text-4xl ">{title}</span>
      </div>
    </div>
  );
}

export default CarouselItem;
