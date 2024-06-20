import { Link } from "react-router-dom";
import Magnifier from "../../assets/Icons/magnifier-plus.png";
import { useLodgmentList, useRestaurantList } from "../../hooks/useTourismQuery";
import Carousel from "./Carousel";
function ShowDataForm({ longitude, latitude }) {
  const { data: restaurantList, isPending: isPending1, isError: isError1 } = useRestaurantList(longitude, latitude);
  const { data: lodgmentList, isPending: isPending2, isError: isError2 } = useLodgmentList(longitude, latitude);

  // console.log(restaurantList, lodgmentList);
  // console.log(isPending1, isPending2);
  // console.log(isError1, isError2);
  return (
    <div className="flex flex-col">
      <div className="h-[auto] mb-10">
        <div className="flex justify-between items-center">
          <span className="text-black-default font-bold text-4xl ml-2 ">맛집정보</span>
          <Link to="/map">
            <div className="flex items-center">
              <span className="font-bold h-6 mr-2">더보기</span>
              <img src={Magnifier} className="h-6" />
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <Carousel list={restaurantList} isLoading={isLoading1} isError={isError1} />
        </div>
      </div>
      <div className="h-[auto]">
        <div className="flex justify-between items-center">
          <span className="text-black-default font-bold text-4xl ml-2 ">숙박정보</span>
          <Link to="/map">
            <div className="flex items-center">
              <span className="font-bold h-6 mr-2">더보기</span>
              <img src={Magnifier} className="h-6" />
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <Carousel list={lodgmentList} isLoading={isLoading2} isError={isError2} />
        </div>
      </div>
    </div>
  );
}

export default ShowDataForm;
