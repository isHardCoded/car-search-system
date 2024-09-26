import "./Search.css";

const Search = ({ searchItem, handleInputChange }) => {
  return (
    <>
      <div className="search">
        <input
          type="search"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Enter the name of the car"
        />
      </div>
    </>
  );
};

export default Search;
