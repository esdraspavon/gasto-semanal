import React, { Component } from "react";
import PropTypes from "prop-types";
class Estimated extends Component {
  render() {
    return (
      <div className="alert alert-primary">
        <p>Presupuesto: $ {this.props.estimated}</p>
      </div>
    );
  }
}
Estimated.propTypes = {
  estimated: PropTypes.number.isRequired
};

export default Estimated;
