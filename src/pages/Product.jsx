import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import LoaderComponent from "../components/loader/Loader";

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const getProductData = async () => {
    if (!id) return;
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const jsonData = await response.json();
    setLoading(false);
    setProduct(jsonData);
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  if (!product) return;

  return (
    <div className="pt-28 px-12 min-h-screen">
      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            <LoaderComponent />
          </div>
        ) : (
          <div>
            <h1 className="text-bold text-lg lg:text-3xl">
              {product.title}
              <span className="text-gray-500">({product.category})</span>
            </h1>
            <img
              src={product.image}
              alt={`Image of ${product.title}`}
              className="aspect-square object-contain h-96 w-full mt-2"
            />
            <p className="pt-5">{product.description}</p>
            <div className="pt-5 flex justify-between items-center">
              <div className="text-md md:text-lg">
                <span>Price:</span>
                <span className="text-bold text-base text-red-600 md:text-lg ml-2">
                  Rs {product.price}
                </span>
              </div>

              <div className="text-md md:text-lg flex justify-between items-center">
                Rating:{" "}
                <span className="ml-2 text-bold">{product.rating.rate}</span>
                <span className="ml-2 text-[yellow] text-xl">
                  <FaStar />
                </span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
