import "bootstrap/dist/css/bootstrap.css";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LogoutInput {
  handleLogout: () => void;
}

const Logout = ({ handleLogout }: LogoutInput) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    sessionStorage.removeItem("jwt");
    handleLogout();
    navigate("/", { replace: true });
  };

  return (
    <div className="mb-3">
      <button
        onClick={onSubmit}
        type="button"
        className="btn btn-outline-secondary"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
