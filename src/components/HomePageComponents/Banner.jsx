import SSG_Banner from "../../assets/Banners/SSG_Landers_Banner.jpg";
function Banner() {
  return (
    <div className="h-[190px] overflow-hidden flex justify-center items-center">
      <img src={SSG_Banner} className="max-w-full h-auto scale-125" />
    </div>
  );
}

export default Banner;
