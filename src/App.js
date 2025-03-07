import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Pagecontainer from "./containers/Pagecontainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Search from "./pages/Search";



function App() {
  return (
    <div>
      <Pagecontainer>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<Details/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products/:search" element={<Search/>} />
        </Routes>
      </BrowserRouter>
      </Pagecontainer>
    </div>
  );
}

export default App;
