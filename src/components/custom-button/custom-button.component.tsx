import React, { ReactNode } from "react";

import "./custom-button.styles.scss";

type CustomButtonProps = {
  children: ReactNode;
  type?: string;
  onClick?: () => Promise<firebase.auth.UserCredential>;
};

export const CustomButton = ({ children, type, onClick, ...otherProps }: CustomButtonProps) => (
  <button className="custom-button" onClick={onClick} {...otherProps}>
    {children}
  </button>
);
