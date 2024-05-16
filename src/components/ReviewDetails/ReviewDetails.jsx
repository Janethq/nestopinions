import { useState, useEffect } from "react";

export default function ReviewDetails() {
  const [reviewData, setReviewData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/reviews");
        const data = await response.json();
        setReviewData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {reviewData && (
        <div>
          <h1>Review Details</h1>
          <div>
            <label>Time Of Visit: </label>
            <span>{reviewData.time}</span>
          </div>
          <div>
            <label>Rating: </label>
            <span>{reviewData.rating}</span>
          </div>
          <div>
            <label>Looks New?: </label>
            <span>{reviewData.looksNew}</span>
          </div>
          <div>
            <label>Pros: </label>
            <span>{reviewData.pros}</span>
          </div>
          <div>
            <label>Cons: </label>
            <span>{reviewData.cons}</span>
          </div>
        </div>
      )}
    </>
  );
}
