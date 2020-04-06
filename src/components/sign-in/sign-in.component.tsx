import React, { Component, FormEvent, ChangeEvent } from "react";

import "./sign-in.styles.scss";

import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-bottom.component";

type SignInProps = {};
type SignInState = {
  email: string;
  password: string;
};

class SignIn extends Component<SignInProps, SignInState> {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = <T extends keyof SignInState>(event: ChangeEvent<HTMLInputElement>) => {
    const newState = { [event.target.name]: event.target.value };

    this.setState(newState as { [P in T]: SignInState[P] });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" required />
          <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="password" required />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
