import React from "react";
//key, username, picture,name, bio, link, followers, blog, location, forHire(boolean) = props
const MainCard = (props) => {
  return (
    <div className="personalCard">
      <h2>{props.name}</h2>
      <h3>{props.username}</h3>
      <div className="textright">
        <p>Bio: {props.bio}</p>
        <p>Location: {props.location}</p>
        <p>Number of Followers: {props.followers}</p>
      </div>
      <div className="picleft">
        <img src={props.picture} alt={props.name} />
      </div>
    </div>
  );
};

export default MainCard;
