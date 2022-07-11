import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button
      class={props.class}
      color={props.color}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

Button.propTypes = {
  class: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

export { Button as default };
