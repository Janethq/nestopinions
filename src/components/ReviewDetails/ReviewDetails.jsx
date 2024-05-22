/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function ReviewDetails({ propertyId }) {
  const [reviewData, setReviewData] = useState([]);
  const [activeRatingButton, setActiveRatingButton] = useState(null);
  const [activeTimeButton, setActiveTimeButton] = useState(null);
  const [activeLooksNewButton, setactiveLooksNewButton] = useState(null);

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
    setActiveRatingButton("highRating");
  };

  const handleLowRating = () => {
    //create new array and re-render
    const sortHighest = [...reviewData].sort((a, b) => a.rating - b.rating);
    setReviewData(sortHighest);
    setActiveRatingButton("lowRating");
  };

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const handleMorningTime = () => {
    const morningReviews = reviewData.filter(
      (review) => review.time === "Morning"
    );
    console.log(morningReviews);
    setReviewData(morningReviews);
    setActiveTimeButton("mornings");
  };

  const handleAfternoonTime = () => {
    const afternoonReviews = reviewData.filter(
      (review) => review.time === "Afternoon"
    );
    console.log(afternoonReviews);
    setReviewData(afternoonReviews);
    setActiveTimeButton("afternoons");
  };

  const handleEveningTime = () => {
    const eveningReviews = reviewData.filter(
      (review) => review.time === "Evening"
    );
    console.log(eveningReviews);
    setReviewData(eveningReviews);
    setActiveTimeButton("evenings");
  };

  const handleNightTime = () => {
    const nightReviews = reviewData.filter((review) => review.time === "Night");
    console.log(nightReviews);
    setReviewData(nightReviews);
    setActiveTimeButton("nights");
  };

  const handleLooksNew = () => {
    const filteredReviews = reviewData.filter((review) => review.looksNew);
    setReviewData(filteredReviews);
    setactiveLooksNewButton("new");
  };

  const handleLooksOld = () => {
    const filteredReviews = reviewData.filter((review) => !review.looksNew);
    setReviewData(filteredReviews);
    setactiveLooksNewButton("old");
  };

  const displayReviews = () => {
    if (reviewData.length > 0) {
      return reviewData.map((review, index) => (
        <div key={index} className="bg-gray-200 p-4 m-2 relative rounded">
          <div>
            <label>Time Of Visit: </label>
            <span>{review.time}</span>
          </div>
          <div>
            <label>Rating: </label>
            <span>{review.rating}</span>
          </div>
          <div>
            <label></label>
            <span>{review.looksNew ? "Looks New" : "Looks Old"}</span>
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
            <button
              onClick={() => handleRemove(review._id)}
              className="absolute top-5 right-5"
            >
              ❌ 
            </button>
          </div>
        </div>
      ));
    } else {
      return <div className="text-gray-400">No reviews posted yet.</div>;
    }
  };

  return (
    <>
      <div className="flex space-x-2">
        <div>
          <button
            onClick={handleHighRating}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none ${
              activeRatingButton === "highRating" ? "bg-red-300" : ""
            }`}
          >
            Highest Rating
          </button>
        </div>
        <div>
          <button
            onClick={handleLowRating}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none ${
              activeRatingButton === "lowRating" ? "bg-red-300" : ""
            }`}
          >
            Lowest Rating
          </button>
        </div>
        <div>
          <button
            onClick={handleMorningTime}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none ${
              activeTimeButton === "mornings" ? "bg-red-300" : ""
            }`}
          >
            Morning Visits
          </button>
        </div>
        <div>
          <button
            onClick={handleAfternoonTime}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none ${
              activeTimeButton === "afternoons" ? "bg-red-300" : ""
            }`}
          >
            Afternoon Visits
          </button>
        </div>
        <div>
          <button
            onClick={handleEveningTime}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none ${
              activeTimeButton === "evenings" ? "bg-red-300" : ""
            }`}
          >
            Evening Visits
          </button>
        </div>
        <div>
          <button
            onClick={handleNightTime}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none ${
              activeTimeButton === "nights" ? "bg-red-300" : ""
            }`}
          >
            Night Visits
          </button>
        </div>
        <div>
          <button
            onClick={handleLooksNew}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none ${
              activeLooksNewButton === "new" ? "bg-red-300" : ""
            }`}
          >
            Looks New
          </button>
        </div>
        <div>
          <button
            onClick={handleLooksOld}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none ${
              activeLooksNewButton === "old" ? "bg-red-300" : ""
            }`}
          >
            Looks Old
          </button>
        </div>
      </div>
      {displayReviews()}
    </>
  );
}
