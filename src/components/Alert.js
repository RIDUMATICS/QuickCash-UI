import React from "react";
import classnames from "classnames";
import _ from "lodash";

const Alert = (props) => (
  <div
    className={classnames("z-20 fixed right-10 top-20 p-4", {
      "bg-red-200 border-l-4 border-red-900 text-red-900 font-semibold text-sm":
        props.type === "alert-danger",
      "bg-green-200 border-l-4 border-green-900 text-green-900 font-semibold text-sm":
        props.type === "alert-success",
    })}
  >
    {_.isArray(props.messages) ? (
      props.messages.map((msg) => (
        <li class="text-md font-bold text-sm">{msg}</li>
      ))
    ) : (
      <li class="text-md font-bold text-sm">{props.messages}</li>
    )}
  </div>
);

export default Alert;
