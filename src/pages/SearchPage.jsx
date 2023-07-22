import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card/Card";
import LoaderComponent from "../components/loader/Loader";
import { UseGetAllProducts } from "../reactquery/GetProducts";

const SearchPage = () => {
  const { searchTerm } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  const { data, isLoading } = UseGetAllProducts();

  const filterProducts = () => {
    const filteredItems = data.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResult(filteredItems);
  };

  useEffect(() => {
    filterProducts();
  }, [searchTerm]);

  return (
    <div className="min-h-screen pt-28 px-12">
      <h1 className="mb-12 text-center sm:text-left">
        Your searched for: <span className="font-bold">{searchTerm}</span>
      </h1>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : searchResult.length > 0 ? (
        <div className="my-12 grid gap-x-5 gap-y-12 grid-cols-2 max-[430px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {searchResult?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating.rate}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center text-lg font-semibold text-center">
          Sorry! No such results found.
        </div>
      )}
    </div>
  );
};

export default SearchPage;
