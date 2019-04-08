import React, { Component } from "react";

class Expend extends Component {
  render() {
    const { name, price } = this.props.expend;
    return (
      <li className="gastos">
        <p>
          {name} <span className="gasto">${price}</span>
        </p>
      </li>
    );
  }
}
export default Expend;
