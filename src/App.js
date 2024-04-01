import "./Common Resources/css/styles.css";
import "./Common Resources/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";
function App() {
  return (
    <div className="App">
     <Header/>
     <Alert/>
     <FirstSection/>
     <SecondSection/>
     <ThirdSection/>
     <FourthSection/>
     <FifthSection/>
     <SixthSection/>
     <Footer/>
    </div>
  );
}

export default App;
