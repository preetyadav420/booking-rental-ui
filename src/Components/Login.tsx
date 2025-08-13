import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

interface IFormInput {
  username: string;
  password: string;
}

const Login = (props: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    props.onSubmit(data);
    reset();
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
