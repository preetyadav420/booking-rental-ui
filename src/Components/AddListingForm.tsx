import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import useListings from "../Hooks/useListings";

interface IFormInput {
  title: string;
  pricePerDay: number;
  description: string;
}

const AddListingForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<Inputs> = (data) => props.submit(data);

  return (
    <>
      <label className="h1">Add New Listing</label>
      <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">Title</label>
        <input
          placeholder="Enter title"
          type="text"
          className="form-control"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <p role="alert" style={{ color: "red" }}>
            This field is required
          </p>
        )}
        <label className="form-label">Price Per Day</label>
        <input
          placeholder="Enter Price Per Day"
          type="number"
          className="form-control"
          {...register("pricePerDay", { required: true })}
        />
        {errors.pricePerDay && (
          <p role="alert" style={{ color: "red" }}>
            This field is required and It should be number only
          </p>
        )}
        <label className="form-label">Description</label>
        <input
          placeholder="Enter description"
          type="text"
          className="form-control"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p role="alert" style={{ color: "red" }}>
            This field is required
          </p>
        )}

        <input className="btn btn-primary" type="submit" />
      </form>
    </>
  );
};

export default AddListingForm;
