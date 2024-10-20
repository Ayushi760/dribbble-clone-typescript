import ArtistsSlider from "../components/ArtistsSlider";
import ExploreDesigns from "../components/ExploreDesigns";
import { GlobalStateContext } from "../context/GlobalStateContext";
import CallToAction from "../components/CallToAction";
import CategorySlider from "../components/CategorySlider";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  const { state } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [state.isAuthenticated, navigate]);

  return (
    <div className="bg-[#f8f7f4] flex flex-col items-center w-full">
      <Header />
      <Hero />
      <ArtistsSlider />
      <ExploreDesigns />
      <CallToAction />
      <CategorySlider />
      <Footer />
    </div>
  );
};

export default Home;