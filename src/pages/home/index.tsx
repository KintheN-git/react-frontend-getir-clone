import Campaigns from "../../components/Campaigns";
import Categories from "../../components/Categories";
import Favorites from "../../components/Favorites";
import HeroSection from "../../components/HeroSection";
import InfoCardSection from "../../components/InfoCardSection";
import MobileAppBanner from "../../components/MobileAppBanner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <Campaigns />
      <Favorites />
      <MobileAppBanner />
      <InfoCardSection />
    </>
  );
};

export default Home;
