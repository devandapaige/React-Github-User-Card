import React from "react";
import "./App.css";
import Card from "./Card";

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
          <h1>Github User Card: Devandapaige</h1>
        </header>
        <div className="search"></div>
        <div className="cards">
          <Card
            key={this.state.data.id}
            username={this.state.data.login}
            img={this.state.data.avatar_url}
            link={this.state.date.html_url}
            bio={this.state.data.bio}
          />
        </div>
      </div>
    );
  }
}

export default App;
