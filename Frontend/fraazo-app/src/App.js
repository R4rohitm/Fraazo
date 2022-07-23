import "./App.css";
import { Footer } from "./components/Footer/Footer";
import BannerCarousel from "./components/Homepage/Banner_slider/BannerCarousel";
import MainRoutes from "./routes/Mainroutes";

import Homepage from "./components/Homepage/Homepage";
import { CartProvider } from "./context/CartContext";

// import MainRoutes from "./routes/Mainroutes.jsx";

function App() {
  return (
    <CartProvider>
      <div>
        <MainRoutes />
        <Homepage />
      </div>
    </CartProvider>
  );
}

export default App;
