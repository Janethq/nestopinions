import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FeaturedListing() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        const response = await fetch("/api/properties");
        if (!response.ok) {
          throw new Error("Failed to fetch property details");
        }
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        console.error("Error loading properties:", err);
      }
    };

    fetchFeaturedProperties();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Featured Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={property.imageUrl}
              alt={property.address}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.address}</h2>
              <p className="text-gray-700">Area: {property.area}</p>
              <p className="text-gray-700">
                Distance to MRT: {property.distanceMrt}
              </p>
              <p className="text-gray-700">
                Postal Code: {property.postalCode}
              </p>
              <Link
                to={`/property/${property._id}`}
                className="inline-block mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedListing;
