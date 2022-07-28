import "./App.css";
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
