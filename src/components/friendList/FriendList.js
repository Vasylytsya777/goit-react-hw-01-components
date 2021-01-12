import React from "react";
// import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  //   const { name, id, isOnline, avatar } = friends;
  return (
    <ul class="friend-list">
      {friends.map((item) => (
        <li class="item" key={item.id}>
          <span
            class="status"
            style={{ color: item.isOnline ? "green" : "red" }}
          >
            {item.isOnline}
          </span>
          <img class="avatar" src={item.avatar} alt={item.name} width="48" />
          <p class="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
