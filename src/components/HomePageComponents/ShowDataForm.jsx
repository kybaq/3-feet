import { useLodgmentList, useRestaurantList } from "../../hooks/useTourismQuery";
import Carousel from "./Carousel";

function ShowDataForm({ longitude, latitude }) {
  const { data: restaurantList, isLoading: isLoading1, isError: isError1 } = useRestaurantList(longitude, latitude);
  const { data: lodgmentList, isLoading: isLoading2, isError: isError2 } = useLodgmentList(longitude, latitude);

  console.log(restaurantList, lodgmentList);
  console.log(isLoading1, isLoading2);
  console.log(isError1, isError2);
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
