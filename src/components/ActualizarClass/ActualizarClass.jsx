import React from "react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 3000);
  }
  componentDidUpdate() {
    console.log("el componente se ha actualizado");
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
      </div>
    );
  }
}
