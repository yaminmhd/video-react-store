import React from "react";
import Like from "./Like";

const MovieItem = ({ movie, deleteHandler, likeStatus, updateLikeStatus }) => {
  const {
    _id,
    title,
    genre: { name },
    numberInStock,
    dailyRentalRate
  } = movie;

  return (
    <tr>
      <td>{title}</td>
      <td>{name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td>
        <Like likeHandler={updateLikeStatus} likeStatus={likeStatus} id={_id} />
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="submit"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MovieItem;
