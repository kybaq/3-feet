import React from "react";

function ToggleButton({ text, onClick }) {
  return (
    <button className="w-36 h-16 bg-gray-200 hover:border-indigo-300 mx-3 mb-2 rounded-lg" onClick={onClick}>
      {text}
    </button>
  );
}

export default ToggleButton;
