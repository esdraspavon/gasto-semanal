import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  // Refs para el formulario
  nameRef = React.createRef();
  priceRef = React.createRef();
  makeExpend = e => {
    //Prevenir el default
    e.preventDefault();

    //crear el objeto con los datos
    const expend = {
      name: this.nameRef.current.value,
      price: this.priceRef.current.value
    };
    console.log(expend);

    //agregarlo y enviarlo por props
    this.props.makeExpend(expend);
    //Resetear el formulario
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.makeExpend}>
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

Form.propTypes = {
  makeExpend: PropTypes.func.isRequired
};

export default Form;
