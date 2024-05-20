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
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <label
          htmlFor="searchCriteria"
          className="block text-gray-700 font-bold mb-2"
        >
          Search Criteria
        </label>
        <select
          id="searchCriteria"
          value={searchCriteria}
          onChange={(e) => setSearchCriteria(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="area">Estate Area</option>
          <option value="postalCode">Postal Code</option>
          <option value="hdbType">HDB Type</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="query" className="block text-gray-700 font-bold mb-2">
          Search Query
        </label>
        <input
          id="query"
          type="text"
          placeholder={`Search by ${searchCriteria}`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>

      <div className="mt-6">
        {searchResults.map((property) => (
          <div
            key={property._id}
            className="p-4 border border-gray-200 rounded-lg mb-4"
          >
            {property.image && (
              <img
                src={property.image}
                alt={`${property.address}`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-gray-700">
              <strong>Address:</strong> {property.address}
            </p>
            <p className="text-gray-700">
              <strong>Area:</strong> {property.area}
            </p>
            <p className="text-gray-700">
              <strong>Postal Code:</strong> {property.postalCode}
            </p>
            <p className="text-gray-700">
              <strong>HDB Type:</strong> {property.hdbType}
            </p>
            <Link
              to={`/property/${property._id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
