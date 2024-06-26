import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FeaturedListing() {
  const [properties, setProperties] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({}); //MANAGE WHICH PROPERTY REVIEWS EXPANDED

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

  // TOGGLE THIS STATE WHEN CLICKED
  const toggleExpandReviews = (propertyId) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [propertyId]: !prevState[propertyId],
    }));
  };

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
              <div className="flex justify-between items-center mt-4 space-x-2">
                <Link
                  to={`/property/${property._id}`}
                  className="inline-block px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
                <span
                  onClick={() => toggleExpandReviews(property._id)}
                  className="cursor-pointer text-gray-500 hover:text-gray-700 text-xl"
                  title={
                    //ADD TITLE TO DISPLAY MESSAGE WHEN HOVERED "SHOW REVIEWS". TAKE LESS SPACE
                    expandedReviews[property._id]
                      ? "Hide Reviews"
                      : "Show Reviews"
                  }
                >
                  {expandedReviews[property._id] ? "▲" : "▼"}
                </span>
              </div>
              {expandedReviews[property._id] && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Reviews:</h3>
                  {property.reviews && property.reviews.length > 0 ? (
                    <ul className="mt-2">
                      {property.reviews.map((review, index) => (
                        <li key={index} className="mb-2">
                          <p className="text-gray-700">
                            <strong>Time:</strong> {review.time}
                          </p>
                          <p className="text-gray-700">
                            <strong>Rating:</strong> {review.rating}
                          </p>
                          <p className="text-gray-700">
                            <strong>Looks New:</strong>{" "}
                            {review.looksNew ? "Yes" : "No"}
                          </p>
                          <p className="text-gray-700">
                            <strong>Pros:</strong> {review.pros}
                          </p>
                          <p className="text-gray-700">
                            <strong>Cons:</strong> {review.cons}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">No reviews yet.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedListing;
