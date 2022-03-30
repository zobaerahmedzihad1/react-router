import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;

  const navigate = useNavigate();
  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };

  return (
    <div className="App">
      <h1>This is friend component. </h1>
      <h2>Name : {name} </h2>
      <Link to={`/friend/${id}`}>Show Detail </Link>
      <button onClick={showFriendDetail}>
        {username} Id: {id}{" "}
      </button>
    </div>
  );
};

export default Friend;
