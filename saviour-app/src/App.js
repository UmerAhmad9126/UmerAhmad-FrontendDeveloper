import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Participant from "./components/Participant";
import RoadMap from "./components/RoadMap";
import Testinomial from "./components/Testinomial";
import Tokennomics from "./components/Tokennomics";
import "./styles/App.css";

function App() {
  return (
    <div className="App">


      {/*Hero Section  */}
      <section className="herosection-wrapper">
        <Navbar />
        <HeroSection />
      </section>


      {/* Testinomial section */}
      <section className="testinomial-wrappper">
        <Testinomial />
      </section>

      {/* Participant */}
      <section className="participant-wrapper">
        <div className="wrapper-overlay" ></div>
        <Participant />
      </section>

      {/* Tokennomics */}
      <section className="tokennomics-wrapper">
        <div className="wrapper-overlay"></div>
        <Tokennomics />
      </section>

      {/* Roadmap */}
      <section className="road-map-wrapper">
        <div className="wrapper-overlay"></div>
        <RoadMap />
      </section>


      {/* Footer */}

      <footer>
        <Footer />
      </footer>



    </div>
  );
}

export default App;
