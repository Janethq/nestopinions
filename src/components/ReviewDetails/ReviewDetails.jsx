/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function ReviewDetails({ propertyId }) {
  const [reviewData, setReviewData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/reviews/property/${propertyId}`);
      const data = await response.json();
      console.log(data);
      setReviewData(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleRemove = async (id) => {
    try {
      await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
      });
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const handleHighRating = () => {
    //create new array and re-render
    const sortHighest = [...reviewData].sort((a, b) => b.rating - a.rating);
    setReviewData(sortHighest);
  };

  const handleLowRating = () => {
    //create new array and re-render
    const sortHighest = [...reviewData].sort((a, b) => a.rating - b.rating);
    setReviewData(sortHighest);
  };

  const displayReviews = () => {
    if (reviewData.length > 0) {
      return reviewData.map((review, index) => (
        <div key={index}>
          <div>
            <label>User: </label>
            <span>UserName Goes Here</span>
          </div>
          <div>
            <label>Time Of Visit: </label>
            <span>{review.time}</span>
          </div>
          <div>
            <label>Rating: </label>
            <span>{review.rating}</span>
          </div>
          <div>
            <label>Looks New?: </label>
            <span>{review.looksNew}</span>
          </div>
          <div>
            <label>Pros: </label>
            <span>{review.pros}</span>
          </div>
          <div>
            <label>Cons: </label>
            <span>{review.cons}</span>
          </div>
          <div>
            <button onClick={() => handleRemove(review._id)}>
              Remove Review
            </button>
          </div>
        </div>
      ));
    } else {
      return <div>No reviews posted yet.</div>;
    }
  };

  return (
    <>
      <h1>Review Details</h1>
      <div>
        <button onClick={handleHighRating}>Highest Rating</button>
      </div>
      <div>
        <button onClick={handleLowRating}>Lowest Rating</button>
      </div>
      {displayReviews()}
    </>
  );
}
