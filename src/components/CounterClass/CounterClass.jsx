import React, { Component } from 'react'

export class CounterClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.valorInicial
        }
    }

    incrementar = () => {
        this.setState({counter: this.state.counter + 1})
    }

    componentDidUpdate() {
        console.log("el componente se ha actualizado");
      }

  render() {
    return (
        <div>
            <h2>Mi contador</h2>
            <span>{this.state.counter}</span>
            <br />
            <button onClick={this.incrementar}>Incrementa!</button>
        </div>
     
    )
  }
}

export default CounterClass