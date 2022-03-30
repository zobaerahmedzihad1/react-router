import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();

  const [user, setUser] = useState({});
  const {name, email, address} = user;
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [friendId]);

  return (
    <div>
      <h2>My Friend Detail component.</h2>
      <h3>Friend Id : {friendId} </h3>
      <h1>Name: {name} </h1>
      <h3>Email : {email} </h3>
      <h4>{address?.geo.lat}</h4>
    </div>
  );
};

export default FriendDetail;
