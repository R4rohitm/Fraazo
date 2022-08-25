import "./App.css";
// import { Footer } from "./components/Footer/Footer";
// import BannerCarousel from "./components/Homepage/Banner_slider/BannerCarousel";
import MainRoutes from "./routes/Mainroutes";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

// import MainRoutes from "./routes/Mainroutes.jsx";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <MainRoutes />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
