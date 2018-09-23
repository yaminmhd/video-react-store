import React from "react";

const MovieItem = ({ movie, deleteHandler}) => {
  const {title, genre:{name}, numberInStock, dailyRentalRate} = movie;
  return (
    <tr>
      <td>{title}</td>
      <td>{name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
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
