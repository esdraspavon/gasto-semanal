import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

class App extends Component {
  state = {
    estimated: "",
    remaining: "",
    expends: {}
  };

  //Agregar un nuevo gasto al state
  makeExpend = expend => {
    //tomar una copia del state actual
    const expends = { ...this.state.expends };

    //agregar al gasto al objeto del state
    expends[`expend${Date.now()}`] = expend;

    //ponerlo en el state
    this.setState({ expends });
  };

  render() {
    return (
      <div className="App container">
        <Header title="Gasto semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form makeExpend={this.makeExpend} />
            </div>
            <div className="one-half column">
              <List expends={this.state.expends} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
