import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import debug from "debug";

const log = debug("mern:Dashboard:MyReviews");

const MyReviewsTab = () => {
  const { authUser } = useContext(AuthContext);
  const [authUserReviews, setAuthUserReviews] = useState([]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const token = localStorage.getItem("token"); // retrieve token from local storage
        const response = await fetch("/api/users/my-reviews", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // using JWT for authorization
          },
        });

        const data = await response.json();
        if (response.ok) {
          setAuthUserReviews(data);
        } else {
          console.error("Error fetching user reviews:", data);
        }
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    };

    fetchUserReviews();
  }, [authUser]);

  log(authUserReviews); //fetching takes time

  return (
    <div className="pt-4">
      <h1 className="py-2 text-2xl font-semibold text-gray-900">
        Posted Reviews
      </h1>
      <div>
        {authUserReviews.length > 0 ? (
          authUserReviews.map((review) => (
            <div
              key={review._id}
              className="bg-white p-4 rounded-md shadow-md mb-4"
            >
              <div className="flex items-center">
                <img
                  src={review.propertyId.imageUrl}
                  alt={review.propertyId.address}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">
                    {review.propertyId.address}
                  </p>
                  <p className="text-gray-700">
                    {review.propertyId.postalCode}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">Visited property in the:</span>
                  <span className="mr-2">
                    <b>{review.time}</b>
                  </span>
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <span className="mr-2">Rating: {review.rating}</span>
                </p>
                <button className="text-indigo-500 mt-2">Read more</button>
                <button className="text-red-500 ml-4 mt-2">
                  Delete review
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">You have yet to post any reviews.</p>
        )}
      </div>
    </div>
  );
};

export default MyReviewsTab;
