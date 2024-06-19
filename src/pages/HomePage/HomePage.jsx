import { useEffect, useState } from "react";
import { fetchClubById } from "../../apis/supabase/supabase.api";
import Banner from "../../components/HomePageComponents/Banner";
import ClubButtons from "../../components/HomePageComponents/ClubButtons";
import useSelectedClubIdStore from "../../store/useSelectedClubIdStore";

function HomePage() {
  const { selectedClubId } = useSelectedClubIdStore();
  const [club, setClub] = useState(null);
  useEffect(() => {
    const getClubData = async () => {
      if (selectedClubId === 0) return;
      const data = await fetchClubById(selectedClubId);
      console.log("현재클럽 ", data);
      setClub(data);
    };
    getClubData();
  }, [selectedClubId]);

  return (
    <div className="flex flex-col gap-y-10 w-[1320px] mx-auto sm:max-w-full sm:px-6 mt-4 ">
      <div className="bg-gray-400 bg-opacity-25 rounded-[10px] w-auto h-[404px]">
        <ClubButtons />
      </div>
      {club && <Banner banner_url={club.banner_url} />}

      <div className="flex  flex-col gap-y-10">
        {/* <div className="h-44">
          <Carousel title={"맛집정보"} list={restaurantList} isLoading={isLoading1} />
        </div>
        <div className="h-44">
          <Carousel title={"숙박정보"} list={lodgmentList} isLoading={isLoading2} />
        </div> */}
      </div>
    </div>
  );
}
export default HomePage;
