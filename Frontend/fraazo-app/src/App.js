import "./App.css";
import { Footer } from "./components/Footer/Footer";
 import BannerCarousel from "./components/Homepage/Banner_slider/BannerCarousel";


// import MainRoutes from "./routes/Mainroutes.jsx";

function App() {
  return (
    <div>
     {/* <MainRoutes />  */}
     
       <BannerCarousel /> 
        
       <Footer /> 
    </div>
  );
}

export default App;
