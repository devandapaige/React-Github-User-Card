import React from "react";
//key, username, picture,name = props
const FollowerCard = (props) => {
    
  return <div className="followerCard">
      <div className="text">
          <h3>{props.className}</h3>
          <h4>{props.username}</h4>
      </div>
      <div className="pic">
          <img src={props.picture} alt={props.name} />
      </div>
  </div>;
};

export default FollowerCard;
