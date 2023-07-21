import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Product from "./pages/Product";
import PageNotAvailable from "./pages/PageNotAvailable";
import { ProductContextProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route path="*" element={<PageNotAvailable />} />
      </Routes>
      <Footer />
    </ProductContextProvider>
  );
}

export default App;
