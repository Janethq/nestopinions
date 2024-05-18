import { useState } from "react";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    postalCode: "",
    area: "",
    distanceMrt: "",
    hdbType: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch("/api/properties", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        required
      />
      <input
        type="number"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        placeholder="Postal Code"
        required
      />
      <input
        type="text"
        name="area"
        value={formData.area}
        onChange={handleChange}
        placeholder="Area"
        required
      />
      <input
        type="text"
        name="distanceMrt"
        value={formData.distanceMrt}
        onChange={handleChange}
        placeholder="Distance to MRT"
        required
      />
      <select
        name="hdbType"
        value={formData.hdbType}
        onChange={handleChange}
        required
      >
        <option value="">Select HDB Type</option>
        <option value="3-room">3-room</option>
        <option value="4-room">4-room</option>
        <option value="5-room">5-room</option>
      </select>
      <input type="file" name="image" onChange={handleImageChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PropertyForm;
