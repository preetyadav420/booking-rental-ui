import Listings from "./Listings";
import ListingForm from "./AddListingForm";
import useListings from "../Hooks/useListings";

const ListingsPage = () => {
  const { listings, isLoading, error, submit } = useListings();

  return (
    <div className="container mt-4">
      <ListingForm submit={submit} />
      <Listings listings={listings} isLoading={isLoading} error={error} />
    </div>
  );
};

export default ListingsPage;
