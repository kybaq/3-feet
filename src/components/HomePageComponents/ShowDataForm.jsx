import { useLodgmentList, useRestaurantList } from "../../hooks/useTourismQuery";
import Carousel from "./Carousel";

function ShowDataForm({ longitude, latitude }) {
  const { data: restaurantList, isPending: isPending1, isError: isError1 } = useRestaurantList(longitude, latitude);
  const { data: lodgmentList, isPending: isPending2, isError: isError2 } = useLodgmentList(longitude, latitude);

  return (
    <div className="flex flex-col">
      <div className="h-[20vh] mb-20">
        <span className="text-black-default font-bold text-4xl my-5 p-3">맛집정보</span>
        <div className="mt-5">
          <Carousel list={restaurantList} isLoading={isLoading1} isError={isError1} />
        </div>
      </div>
      <div className="h-[20vh]">
        <span className="text-black-default font-bold text-4xl mb-5 p-3">숙박정보</span>
        <div className="mt-5">
          <Carousel list={lodgmentList} isLoading={isLoading2} isError={isError2} />
        </div>
      </div>
    </div>
  );
}

export default ShowDataForm;
