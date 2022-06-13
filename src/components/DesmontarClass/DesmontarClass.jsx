import React from "react";
import ExampleChild from "./ExampleChild/ExampleChild";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  handleRemove = () => this.setState({ show: false });

  render() {
    return (
      <div>
        {this.state.show ? <ExampleChild /> : null}
        <button onClick={this.handleRemove}>Eliminar el componente ExampleChild</button>
      </div>
    );
  }
}
