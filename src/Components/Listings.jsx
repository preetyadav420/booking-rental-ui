import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/listings", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        console.log("Fetched listings:", response.data);
        setListings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
      });
  }, []);

  return (
    <>
      <ul className="list-group">
        {listings.map((listing) => (
          <li key={listing.id} className="list-group-item">
            {JSON.stringify(listing)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Listings;
