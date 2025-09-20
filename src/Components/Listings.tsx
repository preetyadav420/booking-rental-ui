import "bootstrap/dist/css/bootstrap.css";
import { ListingDto } from "../Hooks/useListings";

interface ListingProps {
  listings: ListingDto[];
  isLoading: boolean;
  showActions?: boolean;
  remove: (data: ListingDto) => Promise<void>;
}

const Listings = ({
  listings,
  isLoading,
  showActions,
  remove,
}: ListingProps) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Price Per Day</th>
          <th scope="col">Description</th>
          <th scope="col">Vendor</th>
          {showActions && <th scope="col">Action</th>}
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
            {showActions && (
              <td>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => remove(listing)}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Listings;
