import { useState } from "react";

function SearchBar() {
  const [area, setArea] = useState("");
  const [hdbType, setHdbType] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `/api/properties/search?area=${area}&hdbType=${hdbType}&postalCode=${postalCode}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="area">Area:</label>
        <select
          name="area"
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="">Select Area</option>
          <option value="Pasir Ris">Pasir Ris</option>
          <option value="Serangoon">Serangoon</option>
          <option value="Tampines">Tampines</option>
        </select>

        <label htmlFor="hdbType">HDB Type:</label>
        <select
          name="hdbType"
          id="hdbType"
          value={hdbType}
          onChange={(e) => setHdbType(e.target.value)}
        >
          <option value="">Select HDB Type</option>
          <option value="3-room">3-room</option>
          <option value="4-room">4-room</option>
          <option value="5-room">5-room</option>
        </select>

        <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((property) => (
            <li key={property._id}>
              {property.address}, {property.area}, {property.hdbType}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
