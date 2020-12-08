import React from "react";
//key, username, picture,name = props
const FollowerCard = (props) => {
  return (
    <div className="followerCard">
      <div className="text">
        <h3>{props.username}</h3>
      </div>
      <div className="pic">
        <img src={props.picture} alt={props.username} />
      </div>
    </div>
  );
};

export default FollowerCard;
