import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;

  const navigate = useNavigate();
  const showFriendDetail = (id) => {
    const path = `/friend/${id}`;
    navigate(path);
  };

  return (
    <div className="App">
      <h1>This is friend component. </h1>
      <h2>Name : {name} </h2>
      <button onClick={() => showFriendDetail(id)}>
        {username} Id: {id}{" "}
      </button>
    </div>
  );
};

export default Friend;
