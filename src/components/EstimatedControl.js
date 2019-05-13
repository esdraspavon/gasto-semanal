import React, { Component } from "react";
import Estimated from "./Estimated";
import Remaining from "./Remaining";
import PropTypes from "prop-types";

class EstimatedControl extends Component {
  render() {
    return (
      <React.Fragment>
        <Estimated estimated={this.props.estimated} />
        <Remaining
          estimated={this.props.estimated}
          remaining={this.props.remaining}
        />
      </React.Fragment>
    );
  }
}
EstimatedControl.propTypes = {
  estimated: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};

export default EstimatedControl;
