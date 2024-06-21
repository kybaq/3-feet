import { useEffect, useState } from "react";
import { fetchClubById } from "../../apis/supabase/supabase.api";
import Banner from "../../components/HomePageComponents/Banner";
import ClubButtons from "../../components/HomePageComponents/ClubButtons";
import ShowDataForm from "../../components/HomePageComponents/ShowDataForm";
import useSelectedClubStore from "../../store/useSelectedClubStore";
import useUserStore from "../../store/useUserStore";

function HomePage() {
  const { selectedClubId, setSelectedClubId } = useSelectedClubStore();
  const [club, setClub] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const { user } = useUserStore();

  useEffect(() => {
    const getClubData = async () => {
      const data = await fetchClubById(selectedClubId === 0 ? user.club_id : selectedClubId);
      setClub(data);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
    };
    getClubData();
  }, [selectedClubId]);

  return (
    <div className="flex flex-col gap-y-10 w-[1080px] mx-auto sm:max-w-full sm:px-6 mt-4 ">
      <div className="bg-gray-400 bg-opacity-25 rounded-[10px] w-auto h-[404px]">
        <ClubButtons focusId={selectedClubId} />
      </div>
      <div>{club && <Banner banner_url={club.banner_url} />}</div>

      <div className="flex  flex-col gap-y-10">
        <ShowDataForm latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}
export default HomePage;
