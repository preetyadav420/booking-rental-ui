import "bootstrap/dist/css/bootstrap.css";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LogoutProps {
  setToken: (token: string | null) => void;
}

const Logout: React.FC<LogoutProps> = ({ setToken }) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    sessionStorage.removeItem("jwt");
    setToken(null);
    navigate("/", { replace: true });
  };

  return (
    <button
      onClick={onSubmit}
      type="button"
      className="btn btn-outline-secondary"
    >
      Logout
    </button>
  );
};

export default Logout;
