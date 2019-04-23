import React, { Component } from "react";
import DogCard from "../Components/DogCard";

class DogList extends Component {
  constructor() {
    super()
    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3005/dogs")
    .then(response => response.json())
    .then(dogsJSON => {
      this.setState({
        dogs: dogsJSON
      })
    })
  }

  render() {
    return (
      <div className="dogContainer">
        {this.state.dogs.map(dog => <DogCard
          name={dog.name}
          img={dog.img} />
        )}
      </div>
    )
  }
}

export default DogList;
