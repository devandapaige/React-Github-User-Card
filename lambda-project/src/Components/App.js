import React from "react";
import "./App.css";
import MainCard from "./MainCard";
import FollowerCard from "./FollowerCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "devandapaige",
      followerData: [],
      data: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ user: e.target.value });
    console.log(this.state.user)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`new username submitted`)
  }

  componentDidMount() {
    this.fetchData();
    console.log(`fetchData ran`);
    this.fetchFollowerData();
    console.log(`fetchFollowerData ran`);
    console.log(this.state.user);
  }
  componentDidUpdate(prevProps, prevState) {
    // runs when state has been updated with new user.
    //if statement prevents infinite loop
    //this.fetchData();
    //this.fetchFollowerData();
  }
  fetchData = () => {
    fetch(`http://api.github.com/users/${this.state.user}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return this.setState({ data: data });
      })
      .catch((err) => console.log(err));
  };
  fetchFollowerData = () => {
    fetch(`http://api.github.com/users/${this.state.user}/followers`)
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
          <div>
            <form onSubmit={this.handleSubmit}>
              <label for="gitusername">Github Username: </label>
              <input
                type="text"
                name="gitusername"
                placeholder="Enter another GitHub username here"
                value={this.state.user}
                onChange={this.handleChange}
              />
              <button className="go">Go</button>
            </form>
          </div>
          <p className="usersFollowers">{this.state.data.login}'s Followers:</p>
          <div className="followers">
            {this.state.followerData.map((follower, index) => (
              <FollowerCard
                key={index}
                username={follower.login}
                picture={follower.avatar_url}
              />
            ))}
          </div>
        </div>
        <footer>
          <p>
            <a href="andapaige.com">Coded by Amanda Nelson</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
