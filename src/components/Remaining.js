import React, { Component } from "react";
import { revisarPresupuesto } from "../helper";
import PropTypes from "prop-types";
class Remaining extends Component {
  render() {
    const estimated = this.props.estimated;
    const remaining = this.props.remaining;
    return (
      <div className={revisarPresupuesto(estimated, remaining)}>
        <p>Restante: $ {remaining}</p>
      </div>
    );
  }
}
Remaining.propTypes = {
  estimated: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};
export default Remaining;
