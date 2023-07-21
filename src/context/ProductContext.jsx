import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  async function fetchProductData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const productData = await response.json();
    setProducts(productData);
    setLoader(false);
    console.log(productData);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loader }}>
      {children}
    </ProductContext.Provider>
  );
}
