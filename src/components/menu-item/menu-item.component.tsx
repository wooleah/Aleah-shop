import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./menu-item.styles.scss";

type MyProps = RouteComponentProps & {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
};

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match
}: MyProps) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
