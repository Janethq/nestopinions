import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import MyReviewCard from "./MyReviewCard";
import debug from "debug";

const log = debug("mern:Dashboard:MyReviews");

const MyReviewsTab = () => {
  const { authUser } = useContext(AuthContext);
  const [authUserReviews, setAuthUserReviews] = useState([]);
  const [expandedReviewIds, setExpandedReviewIds] = useState(new Set()); // to toggleReadMore

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

  log(authUserReviews);

  const toggleReadMore = (reviewId) => {
    setExpandedReviewIds((prevIds) => {
      const newIds = new Set(prevIds);
      if (newIds.has(reviewId)) {
        newIds.delete(reviewId);
      } else {
        newIds.add(reviewId);
      }
      return newIds;
    });
  };

  return (
    <div className="pt-4">
      <h1 className="py-2 text-2xl font-semibold text-gray-900">
        Posted Reviews
      </h1>
      <div>
        {authUserReviews.length > 0 ? (
          authUserReviews.map((review) => (
            <MyReviewCard
              key={review._id}
              review={review}
              toggleReadMore={toggleReadMore}
              expandedReviewIds={expandedReviewIds}
            />
          ))
        ) : (
          <p className="text-gray-600">You have yet to post any reviews.</p>
        )}
      </div>
    </div>
  );
};

export default MyReviewsTab;
