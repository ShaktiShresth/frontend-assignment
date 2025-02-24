import Card from "../components/card/Card";
import LoaderComponent from "../components/loader/Loader";
import SearchBarMobile from "../components/searchbar/SearchBarMobile";
import { UseGetAllProducts } from "../reactquery/GetProducts";

const Home = () => {
  const { data, isLoading } = UseGetAllProducts();

  return (
    <div className="min-h-screen pt-20">
      <div>
        <SearchBarMobile />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <div className="p-12 grid gap-x-5 gap-y-12 grid-cols-2 max-[430px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {data?.map((item) => (
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
      )}
    </div>
  );
};

export default Home;
