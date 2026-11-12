import Hero from "../components/Home/Hero";
import BusinessOverview from "../components/Home/BusinessOverview";
import ProudProjects from "../components/Home/ProudProjects";
import Testimonials from "../components/Home/Testimonials";

import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <BusinessOverview />
      <ProudProjects />
      <Testimonials />
    </main>
  );
};

export default Home;