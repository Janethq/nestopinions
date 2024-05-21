import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import debug from "debug";

const log = debug("mern:Dashboard:MyReviews");

const MyReviewsTab = () => {
  const { authUser } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
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
              <p className="text-lg font-semibold">{review.pros}</p>
              <p className="text-gray-700">{review.cons}</p>
              <p className="text-sm text-gray-500">{review.time}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyReviewsTab;
