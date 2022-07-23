import "./App.css";
import MainRoutes from "./routes/Mainroutes";
import { Footer } from "./components/Footer/Footer";
import BannerCarousel from "./components/Homepage/Banner_slider/BannerCarousel";
import MainRoutes from "./routes/Mainroutes";

import Homepage from "./components/Homepage/Homepage";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <div>
        <MainRoutes />
      </div>
    </CartProvider>
  );
}

export default App;
