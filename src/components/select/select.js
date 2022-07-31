import "./select.css";
import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    borderRadius: "30px !important",
    width: "100% !important",
    minHeight: "45px !important",
    border: "1px solid #ccc !important",
    padding: "0px 22px !important",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = "red";
    return {
      ...styles,
      // backgroundColor: isDisabled ? "red" : "red",
      color: "#5016BF",
      cursor: isDisabled ? "not-allowed" : "default",
      display: "flex",
      alignItems: "center",
      paddingLeft: "22px",
      fontSize: "16px",
    };
  },
  singleValue: (provided) => {
    const opacity = "0.4 !imporatant";
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
  // menu: {
  //   backgroundColor: "red",
  // },
};

const MySelect = (props) => {
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        classNamePrefix="filter"
        styles={colourStyles}
        options={[props.allOption, ...props.options]}
        onChange={(selected) => {
          if (
            selected !== null &&
            selected.length > 0 &&
            selected[selected.length - 1].value === props.allOption.value
          ) {
            return props.onChange(props.options);
          }
          return props.onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} styles={colourStyles} />;
};

MySelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

MySelect.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*",
  },
};

export default MySelect;
