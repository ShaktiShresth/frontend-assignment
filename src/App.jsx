import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Product from "./pages/Product";
import PageNotAvailable from "./pages/PageNotAvailable";
import SearchPage from "./pages/SearchPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="*" element={<PageNotAvailable />} />
      </Routes>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
