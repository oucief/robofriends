import React, { Component } from "react";
import CardList from "./components/CardList";
import Search from "./components/Search";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => this.setState({robots: response.data}))
  }

  searchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField)
    );
    return (
      !this.state.robots.length ? 
        <h1>Loading...</h1> : 
          <div className="container">
            <div className="header">
              <h1>RoboFriends</h1>
              <Search searchChange={this.searchChange} />
            </div>
            <div className="body">
              <CardList robots={filteredRobots} />
            </div>
            <p>
              Made With ❤ by
              <a href="http://github.com/oucief" target="_blank" rel="noreferrer"> Abderrahmane OUCIEF</a>.
            </p>
          </div>
    );
  }
}

export default App;
