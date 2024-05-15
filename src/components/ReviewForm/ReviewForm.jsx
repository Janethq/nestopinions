import { useState } from "react";

function ReviewForm() {
  const [newReview, setNewReview] = useState({});

  

  return (
    <>
      <div>
        <h1>Review Form</h1>
        <form>
          <div>
            <label htmlFor="time-of-visit">Time Of Visit: </label>

            <select name="time" id="time-of-visit">
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
          </div>
          <div>
            <label htmlFor="rating">Rating: </label>
            <select name="rating" id="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label htmlFor="looks-new">Looks New?: </label>
            <select name="looks-new" id="looks-new">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="pros">Pros: </label>
            <textarea
              name="pros"
              id="pros"
              placeholder="What do you like about this property?"
            ></textarea>
          </div>
          <div>
            <label htmlFor="cons">Cons: </label>
            <textarea
              name="cons"
              id="cons"
              placeholder="What can be improved?"
            ></textarea>
          </div>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ReviewForm;
