import FeaturedListing from "../components/Landing/FeaturedListing";
import SearchBar from "../components/Landing/SearchBar";
import Slider from "../components/Landing/Slider";

export const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Slider />
      <SearchBar />
      <FeaturedListing />
    </div>
  );
};
