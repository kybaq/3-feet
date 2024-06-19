import { useLodgmentList, useRestaurantList } from "../../hooks/useTourismQuery";
import Carousel from "./Carousel";

function ShowDataForm({ longitude, latitude }) {
  const { data: restaurantList, isPending: isPending1, isError: isError1 } = useRestaurantList(longitude, latitude);
  const { data: lodgmentList, isPending: isPending2, isError: isError2 } = useLodgmentList(longitude, latitude);

  // console.log(restaurantList, lodgmentList);
  // console.log(isPending1, isPending2);
  // console.log(isError1, isError2);
  return (
    <div>
      <div className="h-44">
        <span>맛집정보</span>
        <Carousel list={restaurantList} isPending={isPending1} isError={isError1} />
      </div>
      <div className="h-44">
        <span>숙박정보</span>
        <Carousel list={lodgmentList} isPending={isPending2} isError={isError2} />
      </div>
    </div>
  );
}

export default ShowDataForm;
