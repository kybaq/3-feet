import { Skeleton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselItem from "./CarouselItem";

// 화살표
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black-900 bg-opacity-10  scale-125 flex items-center h-[16.5rem] top-9 rounded-[7px]  hover:bg-black-default hover:bg-opacity-50 `}
      onClick={onClick}
    >
      <div style={{ ...style }} />
    </div>
  );
}
// 화살표
function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} bg-black-default bg-opacity-10  scale-125 flex items-center h-[16.5rem] top-9 rounded-[7px]  hover:bg-black-default hover:bg-opacity-50 `}
      onClick={onClick}
    >
      <div className="bg-gray-800" style={{ ...style }} />
    </div>
  );
}

function Carousel({ list, isLoading, isError }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  if (isLoading)
    return (
      <Skeleton>
        <div className="h-[20vh] rounded-lg">contents wrapped</div>
      </Skeleton>
    );
  if (isError) return <div>에러남...</div>;

  return (
    <Slider {...settings}>
      {list.map((data) => {
        return (
          <Link key={data.contentId} to="/map">
            <CarouselItem src={data.firstimage} title={data.title} />
          </Link>
        );
      })}
    </Slider>
  );
}

export default Carousel;
