import { useEffect, useState } from "react";
import { fetchClubById } from "../../apis/supabase/supabase.api";
import useSelectedClubStore from "../../store/useSelectedClubStore";

function Banner() {
  const { selectedClub } = useSelectedClubStore();
  const [banner, SetBanner] = useState();

  useEffect(() => {
    const getClubBannerURl = async () => {
      const data = await fetchClubById(selectedClub);
      SetBanner(data.banner_url);
    };

    getClubBannerURl();
  }, [selectedClub]);

  return (
    <>
      {banner !== 0 && (
        <div className="h-[190px] overflow-hidden flex justify-center items-center">
          <img src={banner} className="max-w-full h-auto scale-125" />
        </div>
      )}
    </>
  );
}

export default Banner;
