import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import {CartContextProvider} from "./store/CartContext";
import { UserProgressContextProvider} from "./store/UserProgressContext";
import Cart from "./components/Cart";

function App() {
  return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header />
                <Meals />
                <Cart />
            </CartContextProvider>
        </UserProgressContextProvider>
  );
}

export default App;
