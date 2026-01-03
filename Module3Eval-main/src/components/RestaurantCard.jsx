import { useNavigate } from "react-router-dom";
import { getData, saveData } from "../utils/localStorage";

export default function RestaurantCard({ data, isAdmin, refresh }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete?")) return;

    const updated = getData().filter(
      (r) => r.restaurantID !== data.restaurantID
    );

    saveData(updated);
    alert("Restaurant Deleted");
    refresh();
  };

  return (
    <div>
      <img
        src={data.image}
        alt={data.restaurantName}
        width="150"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/150?text=No+Image";
        }}
      />

      <h4>{data.restaurantName}</h4>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>
        {data.parkingLot ? "Parking Available" : "No Parking"}
      </p>

      {isAdmin && (
        <>
          <button
            onClick={() =>
              navigate(
                `/admin/restaurants/update/${data.restaurantID}`
              )
            }
          >
            Update
          </button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
