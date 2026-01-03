import { useEffect, useState } from "react";
import { getData } from "../../utils/localStorage";
import RestaurantCard from "../../components/RestaurantCard";

export default function CustomerDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>
      {data.map((r) => (
        <RestaurantCard key={r.restaurantID} data={r} />
      ))}
    </div>
  );
}
