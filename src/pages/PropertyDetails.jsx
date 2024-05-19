import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ReviewDetails from "../components/ReviewDetails/ReviewDetails";

export default function PropertyDetails() {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState(null);

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
      <NavLink to={`/property/${id}/addReview`}>Add Review</NavLink>
      <ReviewDetails propertyId={id} />
      <button onClick={handleShare}>Share</button>
    </div>
  );
}
