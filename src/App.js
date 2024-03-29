import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import View from "./pages/shop/View";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product/:id" element={<View />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <br></br>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
