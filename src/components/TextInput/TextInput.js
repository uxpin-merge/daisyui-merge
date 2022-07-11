import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  return (
    <input
      class={props.class}
      type={props.type}
      placeholder={props.placeholder}
      disabled={props.disabled}
    >
      {props.label}
    </input>
  );
}

TextInput.propTypes = {
  class: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

export { TextInput as default };
