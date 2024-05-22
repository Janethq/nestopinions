import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReviewDetails from "../components/ReviewDetails/ReviewDetails";
import { AuthContext } from "../context/AuthContext";

export default function PropertyDetails() {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState(null);
  const navigate = useNavigate();
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`/api/properties/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch property details");
        }
        const data = await response.json();
        console.log("Fetched property details:", data); //checking
        setPropertyDetails(data);
      } catch (error) {
        console.error("i cannot find this property:", error);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  //SHARE & COPY LINK
  const handleShare = async () => {
    try {
      const url = window.location.href; // Get the current URL
      await navigator.clipboard.writeText(url);
      alert("URL copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleAddReview = () => {
    if (authUser) {
      navigate(`/property/${id}/reviews/new`);
    } else {
      const from = `/property/${id}/reviews`;
      sessionStorage.setItem("from", from); // storing the intended destination in session storage to redirect
      navigate("/login", { state: { from } }); //pass the from state to login
    }
  };

  if (!propertyDetails) {
    return <div>Loading...</div>;
  }
  console.log(propertyDetails.imageUrl);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Property Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {propertyDetails.address}
          </p>
          <p>
            <span className="font-semibold">Area:</span> {propertyDetails.area}
          </p>
          <p>
            <span className="font-semibold">Postal Code:</span>{" "}
            {propertyDetails.postalCode}
          </p>
          <p>
            <span className="font-semibold">HDB Type:</span>{" "}
            {propertyDetails.hdbType}
          </p>
          <p>
            <span className="font-semibold">Distance to MRT:</span>{" "}
            {propertyDetails.distanceMrt}
          </p>
        </div>
        <div>
          {propertyDetails.imageUrl && (
            <img
              src={propertyDetails.imageUrl}
              alt="Property"
              className="rounded-lg shadow-md"
            />
          )}
        </div>
      </div>
      <br />
      {/* <NavLink to={`/property/${id}/addReview`}>Add Review</NavLink> */}
      <button onClick={handleAddReview}>Add Review</button>
      <ReviewDetails propertyId={id} />
      <button onClick={handleShare}>Share</button>
    </div>
  );
}
