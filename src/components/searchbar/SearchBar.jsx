import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

  // search handle
  const handleSearch = (ev) => {
    setSearchTerm(ev.target.value);
  };

  // search key press (enter)
  const handleKeyPress = (ev) => {
    if (ev.key === "Enter") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div>
      <input
        onChange={handleSearch}
        onKeyDown={handleKeyPress}
        value={searchTerm}
        type="text"
        placeholder="Search item..."
        className="py-1 px-4 rounded-[4px] w-[21rem] text-black text-md outline-none"
      />
    </div>
  );
};

export default SearchBar;
