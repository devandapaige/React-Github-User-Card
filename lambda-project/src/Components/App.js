import React from "react";
import "./App.css";
import MainCard from "./MainCard";
import FollowerCard from "./FollowerCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followerData: null,
      data: null,
    };
  }
  componentDidMount() {
    this.fetchData();
    console.log(`fetchData ran`);
    this.fetchFollowerData();
    console.log(`fetchFollowerData ran`);
  }
  fetchData = () => {
    fetch("http://api.github.com/users/devandapaige")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return this.setState({ data: data });
      })
      .catch((err) => console.log(err));
  };
  fetchFollowerData = () => {
    fetch("http://api.github.com/users/devandapaige/followers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return this.setState({ followerData: data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="app">
        <header>
          <h1>Github User Card: {this.state.data.login}</h1>
        </header>
        <div className="search"></div>
        <div className="cards">
          {console.log(this.state.data)}
          {console.log(this.state.followerData)}
          <MainCard
            key={this.state.data.id}
            username={this.state.data.login}
            picture={this.state.data.avatar_url}
            name={this.state.data.name}
            bio={this.state.data.bio}
            link={this.state.data.url}
            followers={this.state.data.followers}
            blog={this.state.data.blog}
            location={this.state.data.location}
            forHire={this.state.data.hireable}
          />
          <p className="usersFollowers">
            {this.state.data.username}'s Followers:
          </p>
          <FollowerCard
            key={this.state.followerData.id}
            username={this.state.followerData.login}
            picture={this.state.followerData.avatar_url}
            name={this.state.followerData.name}
          />
        </div>
      </div>
    );
  }
}

export default App;
