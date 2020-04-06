import React, { ChangeEvent } from "react";

import "./form-input.styles.scss";

type FormInputProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
};

export const FormInput = ({ handleChange, label, ...otherProps }: FormInputProps) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label> : null}
  </div>
);
