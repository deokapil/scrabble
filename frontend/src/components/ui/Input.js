import React from "react";
import F from "futil";

export let Input = ({ field }) => (
  <input
    {...{
      ...F.domLens.value("value", field),

      // onChange: e => { field.value = e.target.value},
      // value: field.value,

      ...F.domLens.hover("hovering", field),
      ...F.domLens.focus("focusing", field),
      ...field.props,
      ...(!field.isValid && { style: { borderColor: "red" } }),
      ref: (ref) => {
        field.focus = () => ref.focus();
      },
    }}
  />
);
