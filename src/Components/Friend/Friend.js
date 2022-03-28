import React from "react";

const Friend = ({friend}) => {
     // console.log(friend);
     const {name, username, id} = friend;
  return (
    <div className="App">
      <h1>This is friend component. </h1>
      <h2>Name : {name} </h2>
      <button>{username} Id: {id} </button>
    </div>
  );
};

export default Friend;
