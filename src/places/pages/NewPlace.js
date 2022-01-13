import React from "react";
import Input from "../../shared/FormElements/Input";
import "./NewPlace.css";
const Newplaces = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title"
      />
    </form>
  );
};
export default Newplaces;
