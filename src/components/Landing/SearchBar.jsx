import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("area"); // Default search criteria

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/api/properties/search?${searchCriteria}=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("i cannot find this property:", error);
      setSearchResults([]);
    }
  };

  return (
    <div>
      <select
        value={searchCriteria}
        onChange={(e) => setSearchCriteria(e.target.value)}
      >
        <option value="area">Estate Area</option>
        <option value="postalCode">Postal Code</option>
        <option value="hdbType">HDB Type</option>
      </select>
      <input
        type="text"
        placeholder={`Search by ${searchCriteria}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.map((property) => (
          <div key={property._id}>
            <p>Area: {property.area}</p>
            <p>Postal Code: {property.postalCode}</p>
            <p>HDB Type: {property.hdbType}</p>
            <Link to={`/property/${property._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
