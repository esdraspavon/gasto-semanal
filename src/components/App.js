import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import EstimatedControl from "./EstimatedControl";
import { validarPresupuesto } from "../helper";

class App extends Component {
  state = {
    estimated: 0,
    remaining: 0,
    expends: {}
  };

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let remaining = prompt("Cual es el presupuesto?");
    let resultado = validarPresupuesto(remaining);
    if (resultado) {
      this.setState({ estimated: resultado, remaining: resultado });
    } else {
      this.obtenerPresupuesto();
    }
  };

  //Agregar un nuevo gasto al state
  makeExpend = expend => {
    //tomar una copia del state actual
    const expends = { ...this.state.expends };

    //agregar al gasto al objeto del state
    expends[`expend${Date.now()}`] = expend;

    //Restar al presupuesto
    this.substractEstimated(expend.price);

    //ponerlo en el state
    this.setState({ expends });
  };

  //Restart del presupuesto cuando un gasto se crea
  substractEstimated = price => {
    //Leer el gasto
    let substract = Number(price);

    //Tomar una copia del state actual
    let remaining = this.state.remaining;
    //La restamos
    remaining -= substract;

    //Agregamos el nuevo state
    this.setState({ remaining });
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
              <EstimatedControl
                estimated={this.state.estimated}
                remaining={this.state.remaining}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
