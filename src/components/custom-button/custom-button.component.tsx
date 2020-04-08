import React, { ReactNode } from "react";

import "./custom-button.styles.scss";

type CustomButtonProps = {
  children?: ReactNode;
  isGoogleSignIn?: boolean;
  type?: string;
  onClick?: () => Promise<firebase.auth.UserCredential>;
};

export const CustomButton = ({ children, isGoogleSignIn, type, onClick, ...otherProps }: CustomButtonProps) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={onClick} {...otherProps}>
    {children}
  </button>
);
