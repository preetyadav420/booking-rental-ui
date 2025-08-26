import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";

const Listings = ({ listings }) => {
  // const { listings } = useListings();

  // const [abs, setAbs] = useState(listings);

  // useEffect(() => {
  //   console.log("chin tapak dam dam");
  //   setAbs(listings);
  // }, []);

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
