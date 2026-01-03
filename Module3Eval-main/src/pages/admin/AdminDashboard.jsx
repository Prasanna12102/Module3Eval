import { useEffect, useState } from "react";
import { getData } from "../../utils/localStorage";
import AddRestaurantForm from "../../components/AddRestaurantForm";
import RestaurantCard from "../../components/RestaurantCard";

export default function AdminDashboard() {
  const [data, setData] = useState([]);

  const refresh = () => setData(getData());

  useEffect(refresh, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AddRestaurantForm refresh={refresh} />
      {data.map((r) => (
        <RestaurantCard
          key={r.restaurantID}
          data={r}
          isAdmin={true}
          refresh={refresh}
        />
      ))}
    </div>
  );
}
