import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Search bar for small screen devices
const SearchBarMobile = () => {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

  // search handle
  const handleSearch = (ev) => {
    setSearchTerm(ev.target.value);
  };

  // key press (enter)
  const handleKeyPress = (ev) => {
    if (ev.key === "Enter") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="mt-8 flex justify-center md:hidden">
      <input
        onChange={handleSearch}
        onKeyDown={handleKeyPress}
        value={searchTerm}
        type="text"
        placeholder="Search item..."
        className="py-2 px-5 rounded-[4px] w-[18rem] bg-[#0a192f] text-white text-md outline-none"
      />
    </div>
  );
};

export default SearchBarMobile;
