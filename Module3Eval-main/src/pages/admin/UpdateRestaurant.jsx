import { useParams, useNavigate } from "react-router-dom";
import { getData, saveData } from "../../utils/localStorage";
import { useState } from "react";

export default function UpdateRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = getData();
  const restaurant = data.find((r) => r.restaurantID == id);

  const [form, setForm] = useState(restaurant);

  const handleUpdate = () => {
    if (!confirm("Are you sure you want to update?")) return;

    const updated = data.map((r) =>
      r.restaurantID == id ? form : r
    );
    saveData(updated);
    alert("Updated");
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <h3>Update Restaurant</h3>
      <input
        value={form.restaurantName}
        onChange={(e) =>
          setForm({ ...form, restaurantName: e.target.value })
        }
      />
      <input
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
