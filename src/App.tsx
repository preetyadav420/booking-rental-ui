import Login from "./Components/Login";
import axios from "axios";

const submit = (data) => {
  console.log("Form submitted with data:", data);

  axios
    .post("http://localhost:8080/auth/login", data)
    .then((response) => {
      console.log("Login successful:", response.data);
    })
    .catch((error) => {
      console.error("There was an error logging in:", error);
    });
};

const App = () => {
  return (
    <div>
      <Login onSubmit={submit} />
    </div>
  );
};

export default App;
