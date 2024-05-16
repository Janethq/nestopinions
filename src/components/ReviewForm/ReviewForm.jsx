
function ReviewForm() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    // process formData
    const formObj = {
      time: e.target.time.value,
      rating: Number(e.target.rating.value),
      looksNew: e.target.looksNew.value,
      pros: e.target.pros.value,
      cons: e.target.cons.value,
    };
    console.log(formObj)
    // Send a POST request to the new route with the form data
    try{
      const res = await fetch("http://localhost:3000/reviews/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObj),
      });
      console.log(res)
    } catch(error){
      console.log(error)
    }
    
  };

  return (
    <>
      <div>
        <h1>Review Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="time-of-visit">Time Of Visit: </label>

            <select name="time" id="time-of-visit">
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
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
            <select name="looksNew" id="looks-new">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
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
