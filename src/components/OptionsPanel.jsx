import React from "react";
import Option from "./Option";

const OptionsPanel = ({ options, selectedOpt, handleOption }) => {
  return (
    <div className="flex flex-col text-sky-100">
      {options.map((opt, i) => (
        <Option
          key={i}
          option={opt}
          selected={selectedOpt}
          handleOption={handleOption}
          index={i}
        />
      ))}
    </div>
  );
};

export default OptionsPanel;
