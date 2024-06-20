import { Skeleton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselItem from "./CarouselItem";

// 화살표
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className}`} onClick={onClick}>
      <div style={{ ...style }} />
    </div>
  );
}
// 화살표
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className={`${className} `} onClick={onClick}>
      <div style={{ ...style, display: "flex" }} />
    </div>
  );
}

function Carousel({ list, isLoading, isError }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        return <CarouselItem key={data.contentId + data.createdtime} src={data.firstimage} title={data.title} />;
      })}
    </Slider>
  );
}

export default Carousel;
