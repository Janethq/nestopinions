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
    const addressWithPostal = {
      address: propertyDetails.address,
      postalCode: propertyDetails.postalCode,
    };
    if (authUser) {
      navigate(`/property/${id}/reviews/new`, {
        state: { addressWithPostal: addressWithPostal },
      });
    } else {
      const from = `/property/${id}/reviews`;
      sessionStorage.setItem("from", from); // storing the intended destination in session storage to redirect
      sessionStorage.setItem(
        "addressWithPostal",
        JSON.stringify(addressWithPostal)
      ); // storing property details to pass thru redirect
      navigate("/login", { state: { from, addressWithPostal } }); //pass the from state to login
    }
  };

  if (!propertyDetails) {
    return <div>Loading...</div>;
  }
  console.log(propertyDetails.imageUrl);
  return (
    <div>
      <h2>Property Details</h2>
      <p>Address: {propertyDetails.address}</p>
      <p>Area: {propertyDetails.area}</p>
      <p>Postal Code: {propertyDetails.postalCode}</p>
      <p>HDB Type: {propertyDetails.hdbType}</p>
      {propertyDetails.imageUrl ? (
        <img src={propertyDetails.imageUrl} alt="Property" />
      ) : (
        <p>No image available</p>
      )}
      <br />
      {/* <NavLink to={`/property/${id}/addReview`}>Add Review</NavLink> */}
      <button onClick={handleAddReview}>Add Review</button>
      <ReviewDetails propertyId={id} />
      <button onClick={handleShare}>Share</button>
    </div>
  );
}
