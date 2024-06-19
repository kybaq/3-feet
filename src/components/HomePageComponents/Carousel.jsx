import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import magnifierPlus from "../../assets/Icons/magnifier-plus.png";

import { Link } from "react-router-dom";

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

function Carousel({ title }) {
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
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-4xl mb-6">{title}</h3>
        <div className="flex items-center hover:text-gray-600 hover:outline rounded-lg">
          <Link to="/map" className="font-bold mr-1">
            더보기
          </Link>
          <img src={magnifierPlus} className="w-5 mr-2" />
        </div>
      </div>

      <Slider {...settings}>{/* <CarouselItem src={Samsung} title={title} /> */}</Slider>
    </div>
  );
}
/* 
<Slider 
{...settings}>
          {list.map((value, index) => (
            <div>			// div로 컨텐츠 컴포넌트 감싸주기
              <SliderContent
                $color={value.color}
                key={index}>
                {value.content}
              </SliderContent>
            </div>
          ))}
        </Slider> */
export default Carousel;
