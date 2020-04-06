import React, { ReactNode } from "react";

import "./custom-bottom.styles.scss";

type CustomButtonProps = {
  children: ReactNode;
  type: string;
};

export const CustomButton = ({ children, type, ...otherProps }: CustomButtonProps) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);
