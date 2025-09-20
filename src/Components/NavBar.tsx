import { Link } from "react-router-dom";
import Logout from "./Logout";
import "../Styles/djText.css";

interface NavbarProps {
  setToken: (token: string | null) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setToken }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand dj-text" to="/listings">
          Rental Platform
        </Link>
        <Logout setToken={setToken} />
      </div>
    </nav>
  );
};

export default Navbar;
