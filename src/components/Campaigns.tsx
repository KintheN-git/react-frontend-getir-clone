import Slider from "react-slick";
import bannerData from "../api/banners.json";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
interface Banner {
  id: number;
  image: string;
}

const Campaigns = () => {
  const NextBtn = (props: any) => {
    const { style, onClick } = props;
    return (
      <button
        className="absolute text-brand-color top-1/2 -right-6 -translate-y-1/2"
        style={style}
        onClick={onClick}
      >
        <FaChevronRight size={22} />
      </button>
    );
  };

  const PrevBtn = (props: any) => {
    const { style, onClick } = props;
    return (
      <button
        className="absolute text-brand-color top-1/2 -left-6 -translate-y-1/2"
        style={style}
        onClick={onClick}
      >
        <FaChevronLeft size={22} />
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    setBanners(bannerData);
    console.log("banners", bannerData);
  }, []);

  return (
    <div className="container mx-auto md:py-8">
      <h3 className="text-sm font-semibold mb-3 text-gray-700">Kampanyalar</h3>
      <Slider {...settings} className="md:-mx-2">
        {banners.map((banner) => (
          <div key={banner.id}>
            <picture className="block px-2">
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="rounded-lg"
              />
            </picture>
          </div>
        ))}
      </Slider>
      <PrevBtn />
    </div>
  );
};

export default Campaigns;
