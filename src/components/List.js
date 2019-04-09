import React, { Component } from "react";
import Expend from "./Expend";
import PropTypes from "prop-types";
class List extends Component {
  render() {
    return (
      <div className="gastos-realizados">
        <h2>Listado</h2>
        {Object.keys(this.props.expends).map(key => (
          <Expend key={key} expend={this.props.expends[key]} />
        ))}
      </div>
    );
  }
}
List.propTypes = {
  expends: PropTypes.object.isRequired
};
export default List;
