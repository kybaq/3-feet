import pngEgg from "../../assets/Icons/building.png";
function CarouselItem({ src, title }) {
  return (
    <div className="relative shadow-md flex flex-col items-center mx-2 bg-slate-300  p-5 rounded-[10px]  w-[20.5rem] h-[334px]">
      <div className="relative flex items-center justify-center bg-white  p-5  h-[200px] rounded-[10px] overflow-hidden">
        <img src={src || pngEgg} className="scale-125 " />
      </div>
      <div className="relative w-[100%]">
        <span className="font-bold Pretendard absolute mt-4 w-[100%]  text-3xl truncate text-black-default ">
          {title}
        </span>
      </div>
    </div>
  );
}

export default CarouselItem;
