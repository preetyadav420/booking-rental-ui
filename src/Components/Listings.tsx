import "bootstrap/dist/css/bootstrap.css";
import { ListingDto } from "../Hooks/useListings";

interface ListingProps {
  listings: ListingDto[];
  isLoading: boolean;
}

const Listings = ({ listings, isLoading }: ListingProps) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Price Per Day</th>
          <th scope="col">Description</th>
          <th scope="col">Vendor</th>
        </tr>
      </thead>

      <tbody>
        {isLoading && (
          <tr>
            <td colSpan={4} className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </td>
          </tr>
        )}
        {listings.map((listing, index) => (
          <tr key={index}>
            <td>{listing.title}</td>
            <td>{listing.pricePerDay}</td>
            <td>{listing.description}</td>
            <td>{listing.vendor.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Listings;
