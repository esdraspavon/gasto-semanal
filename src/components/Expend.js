import React, { Component } from "react";
import PropTypes from "prop-types";

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
Expend.propTypes = {
  expend: PropTypes.object.isRequired
};

export default Expend;
