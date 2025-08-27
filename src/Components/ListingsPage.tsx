import Listings from "./Listings";
import ListingForm from "./AddListingForm";
import useListings from "../Hooks/useListings";
import "../Styles/djText.css";
import Logout from "./Logout";

interface ListingsPageProps {
  handleLogout: () => void;
}

const ListingsPage = ({ handleLogout }: ListingsPageProps) => {
  const { listings, isLoading, error, submit } = useListings();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <label className="h1 dj-text mb-0">Welcome</label>
        <Logout handleLogout={() => handleLogout()} />
      </div>
      <ListingForm submit={submit} />
      <Listings listings={listings} isLoading={isLoading} />
      {error && <p className="alert">Error While Loading Table: {error}</p>}
    </div>
  );
};

export default ListingsPage;
