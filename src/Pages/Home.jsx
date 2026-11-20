import Hero from "../components/Home/Hero";
import AradhyaAdvantage from "../components/Home/AradhyaAdvantage";
import AboutAradhya from "../components/Home/AboutAradhya";
import BusinessVerticals from "../components/Home/BusinessVerticals";
import Experts from "../components/Home/Experts";
import Testimonials from "../components/Home/Testimonials";
//import Footer from "../components/Home/Footer";
//import BusinessOverview from "../components/Home/BusinessOverview";
//import ProudProjects from "../components/Home/ProudProjects";


import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <AradhyaAdvantage />
      <AboutAradhya />
      <BusinessVerticals />
      <Testimonials />
      <Experts />
     {/* <Footer /> */}
    </main>
  );
};

export default Home;