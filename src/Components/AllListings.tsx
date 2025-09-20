import Listings from "./Listings";
import useListings from "../Hooks/useListings";
import "../Styles/djText.css";
import { useNavigate } from "react-router-dom";

const AllListingsPage = () => {
  const { listings, isLoading, error, remove } = useListings({
    mylisting: false,
  });
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <label className="h1 dj-text mb-0">Welcome</label>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate("/mylistings")}
          >
            My Bookings
          </button>
        </div>
      </div>

      <Listings listings={listings} isLoading={isLoading} remove={remove} />
      {error && <p className="alert">Error While Loading Table: {error}</p>}
    </div>
  );
};

export default AllListingsPage;
