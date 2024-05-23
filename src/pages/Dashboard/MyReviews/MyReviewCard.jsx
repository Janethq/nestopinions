import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyReviewCard = ({
  review,
  toggleReadMore,
  expandedReviewIds,
  myReviewToRemove,
}) => {
  const deleteUserReview = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/users/my-reviews/${review._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        myReviewToRemove(review._id); // to update state in parent component
        toast.success("Review deleted successfully");
      } else {
        console.error("Failed to delete review");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div key={review._id} className="bg-white p-4 rounded-md shadow-md mb-4">
      <div className="flex items-center">
        <Link to={`/property/${review.propertyId._id}`}>
          <img
            src={review.propertyId.imageUrl}
            alt={review.propertyId.address}
            className="w-16 h-16 object-cover rounded mr-4"
          />
        </Link>

        <div>
          <Link to={`/property/${review.propertyId._id}`}>
            <p className="text-lg font-semibold">{review.propertyId.address}</p>
          </Link>
          <p className="text-gray-700">{review.propertyId.postalCode}</p>
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
          <span className="mr-2">Rating:</span>
          {/* create an array w its length ===  rating, then use callback function to display 1 star for 1 element (_ === undefined) */}
          {Array.from({ length: review.rating }, (_, i) => (
            <span key={i} className="text-yellow-500">
              ★
            </span>
          ))}
        </p>
        {expandedReviewIds.has(review._id) && (
          <div className="mt-2">
            <p className="text-gray-800">
              <i>Pros:</i>
            </p>{" "}
            <p className="text-gray-800 pb-2 border-b border-gray-300">
              {review.pros}{" "}
            </p>
            <p className="text-gray-800">
              <i>Cons:</i>
            </p>{" "}
            <p className="text-gray-800 pb-2">{review.cons} </p>
          </div>
        )}
        <button
          className="text-indigo-500 mt-2"
          onClick={() => toggleReadMore(review._id)}
        >
          {expandedReviewIds.has(review._id) ? "Read less" : "Read more"}
        </button>
        <button className="text-red-500 ml-4 mt-2" onClick={deleteUserReview}>
          Delete review
        </button>
      </div>
    </div>
  );
};

export default MyReviewCard;
