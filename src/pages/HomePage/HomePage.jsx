
import { useEffect, useState } from "react";
import Banner from "../../components/HomePageComponent/Banner";
import Carousel from "../../components/HomePageComponent/Carousel";
import ClubButtons from "../../components/HomePageComponent/ClubButtons";
import useSelectedClubStore from "../../store/useSelectedClubStore";
import { fetchClubById } from "../../apis/supabase/supabase.api";

function HomePage() {
  const { selectedClubId } = useSelectedClubStore();
  const [club, setClub] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {

    const getClubData = async () => {
      if (selectedClubId === 0) return;
      const data = await fetchClubById(selectedClubId);
      setClub(data);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
    };
    getClubData();
  }, [selectedClubId]);

  return (
    <div className="flex flex-col gap-y-10 w-[1320px] mx-auto sm:max-w-full sm:px-6 mt-4 ">
      <div className="bg-gray-400 bg-opacity-25 rounded-[10px]  w-auto h-[404px]">
        <ClubButtons />
      </div>
      <div className="bg-blue-300 h-30">
        <Banner />
      </div>
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
