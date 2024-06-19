function CarouselItem({ src, title }) {
  return (
    <div className="flex flex-col items-center bg-slate-500 bg-opacity-25 p-5 rounded-[10px] mx-1 w-[312px] h-[334px]">
      <div className="bg-white mx-6 p-5 w-[276px] h-[200px] rounded-[10px] overflow-hidden">
        <img src={src} className="scale-125 " />
      </div>
      <div className="relative w-[100%] flex justify-center">
        <span className="font-bold absolute mt-4 w-[100%]  text-3xl truncate">{title}</span>
      </div>
    </div>
  );
}

export default CarouselItem;
