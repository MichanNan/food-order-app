import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartPorvider from "./store/CartProvider";

import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHanlder = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartPorvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHanlder} />
      <main>
        <Meals />
      </main>
    </CartPorvider>
  );
}

export default App;
