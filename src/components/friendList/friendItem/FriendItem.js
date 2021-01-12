import React from "react";
import PropTypes from "prop-types";

const FriendItem = ({ friend }, { key }) => {
  return (
    <li className="item" key={key}>
      <span className={friend.isOnline ? "online" : "offline"}></span>
      <img className="avatar" src={friend.avatar} alt="" width="48" />
      <p className="names">{friend.name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  stat: PropTypes.object,
};

export default FriendItem;
