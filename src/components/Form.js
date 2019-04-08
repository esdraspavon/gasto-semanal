import React, { Component } from "react";

class Form extends Component {
  // Refs para el formulario
  nameRef = React.createRef();
  priceRef = React.createRef();
  makeExpensive = e => {
    //Prevenir el default
    e.preventDefault();

    //crear el objeto con los datos
    const expend = {
      name: this.nameRef.current.value,
      price: this.priceRef.current.value
    };
    console.log(expend);

    //agregarlo y enviarlo por props

    //Resetear el formulario
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.makeExpensive}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Ej. Transporte"
            ref={this.nameRef}
          />
        </div>

        <div className="campo">
          <label>Cantidad</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Ej. 300"
            ref={this.priceRef}
          />
        </div>

        <input
          className="button-primary u-full-width"
          type="submit"
          value="Agregar"
        />
      </form>
    );
  }
}

export default Form;
