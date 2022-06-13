import React from "react";

export default class ExampleChild extends React.Component {
    componentWillUnmount() {
        alert("El componente ExampleChild esta apunto de ser eliminado(desmontado).");
    }
    render() {
        return <h1>Hola The Bridge!</h1>;
    }
}
