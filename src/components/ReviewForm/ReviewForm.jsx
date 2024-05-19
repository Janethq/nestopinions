import "tailwindcss/tailwind.css";
import { useNavigate, useParams } from "react-router-dom";

function ReviewForm() {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // process formData
    const formObj = {
      // take property ID from mongo and reference here
      propertyId: id,
      time: e.target.time.value,
      rating: Number(e.target.rating.value),
      looksNew: e.target.looksNew.value,
      pros: e.target.pros.value,
      cons: e.target.cons.value,
    };
    console.log(formObj);
    // Send a POST request to the new route with the form data
    //http://localhost:5173/addreview
    try {
      const res = await fetch(`/api/reviews/property/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObj),
      });
      console.log(res);
      navigate(`/property/${id}`); //instead of using window.location.href to redirect
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Review Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="time-of-visit" className="text-gray-700">
              Time Of Visit:
            </label>
            <select
              name="time"
              id="time-of-visit"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-gray-700">
              Rating:
            </label>
            <select
              name="rating"
              id="rating"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="looks-new" className="text-gray-700">
              Looks New?:
            </label>
            <select
              name="looksNew"
              id="looks-new"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="pros" className="text-gray-700">
              Pros:
            </label>
            <textarea
              name="pros"
              id="pros"
              placeholder="What do you like about this property?"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="pros" className="text-gray-700">
              Cons:
            </label>
            <textarea
              name="cons"
              id="cons"
              placeholder="What can be improved?"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            value="submit"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ReviewForm;
