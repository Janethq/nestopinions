import { useState } from "react";

const PropertyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    address: "",
    postalCode: "",
    area: "",
    distanceMrt: "",
    hdbType: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />
      <input
        type="number"
        name="postalCode"
        placeholder="Postal Code"
        onChange={handleChange}
      />
      <input
        type="text"
        name="area"
        placeholder="Area"
        onChange={handleChange}
      />
      <input
        type="text"
        name="distanceMrt"
        placeholder="Distance to MRT"
        onChange={handleChange}
      />
      <input
        type="text"
        name="hdbType"
        placeholder="HDB Type"
        onChange={handleChange}
      />
      <input type="file" name="image" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PropertyForm;
