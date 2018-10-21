import React from "react";

const List = ({ genres }) => {
  return (
    <ul class="list-group">
      {genres.map(genre => (
        <li className="list-group-item">{genre.name}</li>
      ))}
    </ul>
  );
};

export default List;
