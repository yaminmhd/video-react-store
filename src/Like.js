import React from "react";

const Like = ({ likeHandler, id, likeStatus }) => {
  const className = likeStatus ? "heart" : "heart-o";
  return (
    <i
      style={{cursor: 'pointer'}}
      onClick={() => likeHandler(id)}
      className={`fa fa-${className}`}
      aria-hidden="true"
    />
  );
};

export default Like;
