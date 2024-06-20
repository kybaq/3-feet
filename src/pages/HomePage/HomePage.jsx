import { useEffect, useState } from "react";
import { fetchClubById } from "../../apis/supabase/supabase.api";
import Banner from "../../components/HomePageComponents/Banner";
import ClubButtons from "../../components/HomePageComponents/ClubButtons";
import ShowDataForm from "../../components/HomePageComponents/ShowDataForm";
import useSelectedClubStore from "../../store/useSelectedClubStore";

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
    <div className="flex flex-col gap-y-10 w-[1080px] mx-auto sm:max-w-full sm:px-6 mt-4 ">
      <div className="bg-gray-400 bg-opacity-25 rounded-[10px] w-auto h-[404px]">
        <ClubButtons />
      </div>
      <div>{club && <Banner banner_url={club.banner_url} />}</div>

      <div className="flex  flex-col gap-y-10">
        <ShowDataForm latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}
export default HomePage;
