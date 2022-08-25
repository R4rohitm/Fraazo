import "./App.css";
import MainRoutes from "./routes/Mainroutes";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";



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
