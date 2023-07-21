import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, image, title, description, price, rating } = props;

  return (
    <div className="shadow-xl p-2 rounded-2xl">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={`Image of ${title}`}
          className="object-contain aspect-square hover:scale-105 cursor-pointer transition"
        />
      </Link>
      <h2 className="text-sm md:text-lg font-semibold truncate pt-2">
        {title}
      </h2>
      <p className="text-sm pt-2">{description.slice(0, 119) + "..."}</p>
      <div className="text-sm md:text-base flex justify-between items-center pt-2">
        <span className="font-semibold">Rs {price}</span>
        <span className="flex items-center">
          <FaStar className="mx-2" />
          {rating}
        </span>
      </div>
    </div>
  );
};

export default Card;
