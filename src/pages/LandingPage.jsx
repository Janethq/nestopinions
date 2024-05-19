import FeaturedListing from "../components/Landing/FeaturedListing";
import SearchBar from "../components/Landing/SearchBar";
import Slider from "../components/Landing/Slider";

export const LandingPage = () => {
  return (
    <div>
      <Slider />
      <SearchBar />
      <FeaturedListing />
    </div>
  );
};
