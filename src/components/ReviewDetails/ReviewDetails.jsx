import { useState, useEffect } from "react";

export default function ReviewDetails() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/reviews/test");
        const data = await response.json();
        console.log(data);
        setReviewData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {reviewData.length > 0 && (
        <div>
          <h1>Review Details</h1>
          {reviewData.map((review, index) => (
            // set unique key to remove error
            <div key={index}>
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
                <button>Remove Review</button>
              </div>
              <div>
                <button>Edit Review</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
