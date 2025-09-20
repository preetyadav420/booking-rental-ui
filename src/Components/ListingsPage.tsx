import Listings from "./Listings";
import ListingForm from "./AddListingForm";
import useListings from "../Hooks/useListings";
import "../Styles/djText.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

// interface ListingsPageProps {
//   handleLogout: () => void;
//   { handleLogout }: ListingsPageProps
// }

const ListingsPage = () => {
  const navigate = useNavigate();

  const { listings, isLoading, error, submit, remove } = useListings({
    mylisting: true,
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end align-items-center mb-3">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate("/listings")}
        >
          All Listings
        </button>
      </div>
      <ListingForm submit={submit} />
      <Listings
        listings={listings}
        isLoading={isLoading}
        showActions={true}
        remove={remove}
      />
      {error && <p className="alert">Error While Loading Table: {error}</p>}
    </div>
  );
};

export default ListingsPage;
