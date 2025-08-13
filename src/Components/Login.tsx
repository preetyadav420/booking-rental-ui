import { useForm, SubmitHandler } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  username: string;
  password: string;
}

const Login = (props: any) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios
      .post("http://localhost:8080/auth/login", data, { withCredentials: true })
      .then((response) => {
        console.log("Login successful:", response.data);
        sessionStorage.setItem("jwt", response.data.token);
        reset();
        props.handleLogin();
        navigate("/welcome", { replace: true }); // Redirect to dashboard after successful login
      })
      .catch((error) => {
        console.error("There was an error logging in:", error);
      });
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label">Username</label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter your username"
        {...register("username", { required: true })}
      />
      {errors.username && (
        <span className="text-danger">Username is required</span>
      )}
      <label className="form-label">Password</label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter your password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="text-danger">Password is required</span>
      )}

      <input className="btn btn-primary mt-2" type="submit" />
    </form>
  );
};

export default Login;
