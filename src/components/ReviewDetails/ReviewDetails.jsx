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

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const handleMorningTime = () => {
    const morningReviews = reviewData.filter(
      (review) => review.time === "Morning"
    );
    console.log(morningReviews);
    setReviewData(morningReviews);
  };

  const handleAfternoonTime = () => {
    const afternoonReviews = reviewData.filter(
      (review) => review.time === "Afternoon"
    );
    console.log(afternoonReviews);
    setReviewData(afternoonReviews);
  };

  const handleEveningTime = () => {
    const eveningReviews = reviewData.filter(
      (review) => review.time === "Evening"
    );
    console.log(eveningReviews);
    setReviewData(eveningReviews);
  };

  const handleNightTime = () => {
    const nightReviews = reviewData.filter((review) => review.time === "Night");
    console.log(nightReviews);
    setReviewData(nightReviews);
  };

const handleLooksNew = () => {
  const filteredReviews = reviewData.filter((review) => review.looksNew);
  setReviewData(filteredReviews);
};

const handleLooksOld = () => {
  const filteredReviews = reviewData.filter((review) => !review.looksNew);
  setReviewData(filteredReviews);
};

  const displayReviews = () => {
    if (reviewData.length > 0) {
      return reviewData.map((review, index) => (
        <div key={index} className="bg-gray-200 p-4 m-2 rounded">
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
            <span>{review.looksNew ? "Yes" : "No"}</span>
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
            <button onClick={() => handleRemove(review._id)}>❌ Remove</button>
          </div>
        </div>
      ));
    } else {
      return <div>No reviews posted yet.</div>;
    }
  };

  return (
    <>
      <div className="flex space-x-2">
        <div>
          <button
            onClick={handleHighRating}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Highest Rating
          </button>
        </div>
        <div>
          <button
            onClick={handleLowRating}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Lowest Rating
          </button>
        </div>
        <div>
          <button
            onClick={handleMorningTime}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Morning Visits
          </button>
        </div>
        <div>
          <button
            onClick={handleAfternoonTime}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Afternoon Visits
          </button>
        </div>
        <div>
          <button
            onClick={handleEveningTime}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Evening Visits
          </button>
        </div>
        <div>
          <button
            onClick={handleNightTime}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Night Visits
          </button>
        </div>
        <div>
          <button
            onClick={handleLooksNew}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Looks New
          </button>
        </div>
        <div>
          <button
            onClick={handleLooksOld}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Looks Old
          </button>
        </div>
      </div>
      {displayReviews()}
    </>
  );
}
