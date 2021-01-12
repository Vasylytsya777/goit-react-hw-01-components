import React from "react";
import FriendItem from "./friendItem/FriendItem";
import "./friendListStyle.css";

// import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  //   const { name, id, isOnline, avatar } = friends;
  //   const status = isOnline ? online : offline;
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
