import { useForm, SubmitHandler } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface IFormInput {
  username: string;
  password: string;
}

interface LoginProps {
  setToken: (token: string) => void;
}

const Login = ({ setToken }: LoginProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    if (token) navigate("/listings", { replace: true });
  }, [navigate]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const [loginError, setLoginError] = useState<AxiosError | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios
      .post("http://localhost:8080/auth/login", data, { withCredentials: true })
      .then((response) => {
        // console.log("Login successful:", response.data);
        const token = response.data.token;
        sessionStorage.setItem("jwt", token);
        setToken(token);
        setLoginError(null);
        reset();
        navigate("/listings", { replace: true }); // Redirect to dashboard after successful login
      })
      .catch((error) => {
        console.error("There was an error logging in:", error);
        if (axios.isAxiosError(error)) setLoginError(error);
      });
  };

  return (
    <div className="container mt-4">
      <label className="h2">Login</label>
      <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">Username</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter your username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p role="alert" style={{ color: "red" }}>
            Username is required
          </p>
        )}
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p role="alert" style={{ color: "red" }}>
            Password is required
          </p>
        )}

        <input className="btn btn-primary mt-2" type="submit" />
      </form>
      {loginError && (
        <p role="alert" style={{ color: "red" }}>
          Wrong credentials
        </p>
      )}
    </div>
  );
};

export default Login;
