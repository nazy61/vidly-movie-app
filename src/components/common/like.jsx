import React from "react";

const Like = ({ liked, onClicked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onClicked}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
