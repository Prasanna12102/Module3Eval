import { useState } from "react";
import { getData, saveData } from "../utils/localStorage";

const AddRestaurantForm = ({ setRestaurants }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Rajasthani");
  const [parking, setParking] = useState("true");

  // ✅ Pre-filled image (Masai requirement)
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
  );

  const handleAdd = () => {
    // ✅ Validation (edge case handling)
    if (!name || !address || !image) {
      alert("Please fill all fields");
      return;
    }

    const data = getData();

    const newRestaurant = {
      restaurantID: Date.now(), // auto-generated
      restaurantName: name,
      address: address,
      type: type,
      parkingLot: parking === "true",
      image: image
    };

    const updatedData = [...data, newRestaurant];

    saveData(updatedData);
    setRestaurants(updatedData);

    alert("Restaurant added successfully");

    // ✅ Clear form after success (edge case requirement)
    setName("");
    setAddress("");
    setType("Rajasthani");
    setParking("true");
    setImage("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6");
  };

  return (
    <div>
      <h3>Add Restaurant</h3>

      <input
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <select value={parking} onChange={(e) => setParking(e.target.value)}>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>

      {/* ✅ Image input (editable) */}
      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button onClick={handleAdd}>Add Restaurant</button>
    </div>
  );
};

export default AddRestaurantForm;
