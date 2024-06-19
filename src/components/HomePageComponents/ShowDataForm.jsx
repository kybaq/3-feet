import { useLodgmentList, useRestaurantList } from "../../hooks/tourismQuery";
import Carousel from "../Carousel/Carousel";

function ShowDataForm({ club }) {
  const { restaurantList, isLoading1 } = useRestaurantList(club.latitude, club.longitude);
  const { lodgmentList, isLoading2 } = useLodgmentList(club.latitude, club.longitude);
  return (
    <div>
      <div className="h-44">
        <span>맛집정보</span>
        <Carousel list={restaurantList} isLoading={isLoading1} />
      </div>

      <div className="h-44">
        <span>숙박정보</span>
        <Carousel list={lodgmentList} isLoading={isLoading2} />
      </div>
    </div>
  );
}

export default ShowDataForm;
