import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const noop = () => {};

const Button = ({
  type = "button",
  buttonText,
  onClick = noop,
  loading,
  className = "",
}) => {
  const handleClick = e => {
    if (!loading) {
      onClick(e);
    }
  };

  return (
    <div className="mt-6">
      <button
        type={type}
        onClick={handleClick}
        disabled={loading}
        className={classnames(
          [className],
          "transition border hover:bg-opacity-90 focus:outline-none group relative flex w-full justify-center rounded-md border-transparent px-4 py-2  text-sm font-medium leading-5 text-white duration-150 ease-in-out",
          {
            "bg-bb-purple": !loading,
            "bg-bb-gray-700": loading,
            "cursor-wait": loading,
          }
        )}
      >
        {loading ? "Loading..." : buttonText}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;
