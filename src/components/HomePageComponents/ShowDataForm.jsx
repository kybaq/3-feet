import { useLodgmentList, useRestaurantList } from "../../hooks/useTourismQuery";
import Carousel from "../Carousel/Carousel";

function ShowDataForm({ longitude, latitude }) {
  const { restaurantList, isLoading1, isError1 } = useRestaurantList(longitude, latitude);
  const { lodgmentList, isLoading2, isError2 } = useLodgmentList(longitude, latitude);

  console.log(restaurantList, lodgmentList);
  return (
    <div>
      <div className="h-44">
        <span>맛집정보</span>
        <Carousel list={restaurantList} isLoading={isLoading1} isError={isError1} />
      </div>
      <div className="h-44">
        <span>숙박정보</span>
        <Carousel list={lodgmentList} isLoading={isLoading2} isError={isError2} />
      </div>
    </div>
  );
}

export default ShowDataForm;
