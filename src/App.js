import React, { Component } from "react";
import CrowCard from "./components/CrowCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import crows from "./crows.json";
import "./App.css";

class App extends Component {
  // Setting this.state.crows to the crows json array
  state = {
    crows
  };

  removeCrow = id => {
    // Filter this.state.crows for crows with an id not equal to the id being removed
    const crows = this.state.crows.filter(crow => crow.id !== id);
    // Set this.state.crows equal to the new crows array
    this.setState({ crows });
  };

  // Map over this.state.crows and render a CrowCard component for each crow object
  render() {
    return (
      <Wrapper>
        <Title>Crows List</Title>
        {this.state.crows.map(crow => (
          <CrowCard
            removeCrow={this.removeCrow}
            id={crow.id}
            key={crow.id}
            name={crow.name}
            image={crow.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
