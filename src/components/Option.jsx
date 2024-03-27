import React from "react";

const Option = ({ option, selected, handleOption, index }) => {
  return (
    <div
      key={index}
      className={`flex items-center mb-2 cursor-pointer border-2 p-2 rounded ${
        index === selected ? "border-lime-300" : "border-gray-400"
      }`}
      onClick={() => handleOption(index)}
    >
      <input
        type="checkbox"
        checked={index === selected}
        className="checkbox checkbox-secondary mr-2"
      />
      <span>{option.option}</span>
    </div>
  );
};

export default Option;
