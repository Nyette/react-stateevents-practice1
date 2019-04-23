import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: false
  }

  handleClick = event => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img alt={this.props.name} src={this.props.img} />
        <button onClick={this.handleClick}>Bark</button>
        {this.state.clicked ? <h1>RUFF</h1> : null}
      </div>
    );
  }
}

export default DogCard;
