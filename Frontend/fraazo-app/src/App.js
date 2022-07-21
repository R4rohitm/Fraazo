import "./App.css";
// import { Footer } from "./components/Footer/Footer";
 import BannerCarousel from "./components/Homepage/BannerCarousel";
import Slideshow from "./components/Homepage/Slider";
// import MainRoutes from "./routes/Mainroutes.jsx";

function App() {
  return (
    <div>
     {/* <MainRoutes />  */}
     
      <BannerCarousel /> 
      <Slideshow />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
