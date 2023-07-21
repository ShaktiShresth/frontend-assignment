import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((jsonProductData) => setProduct(jsonProductData));
  }, [id]);

  if (!product) return;

  return (
    <div className="pt-28 px-12 min-h-screen">
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
          Rating: <span className="ml-2 text-bold">{product.rating.rate}</span>
          <span className="ml-2 text-[yellow] text-xl">
            <FaStar />
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Product;
