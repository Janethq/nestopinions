import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [area, setArea] = useState("");
  const [hdbType, setHdbType] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate postal code if provided
    if (postalCode && postalCode.length !== 6) {
      alert("Postal code must be exactly 6 digits.");
      return;
    }

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

  const handlePostalCodeChange = (e) => {
    const value = e.target.value;
    // Allow only numeric values and limit to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPostalCode(value);
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
          <option value="Bedok">Bedok</option>
          <option value="Clementi">Clementi</option>
          <option value="Punggol">Punggol</option>
          <option value="Jurong East">Jurong East</option>
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
          onChange={handlePostalCodeChange}
        />

        <button type="submit">Search</button>
      </form>

      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((property) => (
            <li key={property._id}>
              <div>
                <img
                  src={property.imageUrl}
                  alt={`Image of ${property.address}`}
                  style={{ width: "200px", height: "auto" }}
                />
                <p>
                  {property.address}, {property.area}, {property.postalCode},{" "}
                  {property.hdbType}, {property.distanceMrt}
                </p>
                <Link
                  to={`/property/${property._id}`}
                  className="inline-block mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
