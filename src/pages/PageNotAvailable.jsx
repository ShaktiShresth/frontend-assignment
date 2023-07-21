import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PageNotAvailable = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-bold text-4xl">404 Page Not Found</h1>
      <p className="text-base lg:text-xl mt-4">
        Sorry, the page you are looking for does not exist.
      </p>

      <div className="mt-12 flex gap-2 justify-center items-center text-gray-500">
        <FaArrowLeft />
        <Link to="/" className="font-semibold hover:underline">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default PageNotAvailable;
