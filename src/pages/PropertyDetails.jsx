import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      <h2>Property Details</h2>
      <p>Area: hello{propertyDetails.area}</p>
      <p>Postal Code: {propertyDetails.postalCode}</p>
      <p>HDB Type: {propertyDetails.hdbType}</p>
      <br />
      <button onClick={handleShare}>Share</button>
    </div>
  );
}
