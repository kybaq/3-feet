import Banner from "../../components/HomePageComponents/Banner";
import Carousel from "../../components/HomePageComponents/Carousel";
import ClubButtons from "../../components/HomePageComponents/ClubButtons";

function HomePage() {
  return (
    <div className="flex flex-col gap-y-10 w-[1320px] mx-auto sm:max-w-full sm:px-6 mt-4 ">
      <div className="bg-gray-400 bg-opacity-25 rounded-[10px] w-auto h-[404px]">
        <ClubButtons />
      </div>
      <Banner />
      <div className="flex  flex-col gap-y-10">
        <div>
          <Carousel title={"맛집정보"} />
        </div>
        <div className="h-44">
          <Carousel title={"숙박정보"} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
