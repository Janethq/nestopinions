import PropertyForm from "../components/PropertyForm/PropertyForm";

function PropertyFormPage() {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("/api/properties/add", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
     
    } catch (error) {
      console.error("Error:", error);
    
    }
  };

  return (
    <div>
      <h1>Add a New Property</h1>
      <PropertyForm onSubmit={handleSubmit} />
    </div>
  );
}

export default PropertyFormPage;
