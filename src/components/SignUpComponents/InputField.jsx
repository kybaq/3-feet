import React from "react";

function InputField({ label, type, placeholder, value, onChange, errorMessage, children }) {
  return (
    <div className="mb-4">
      <label className="mb-2 text-lg block font-bold">{label}</label>
      <div className="relative">
        <input
          type={type}
          className="w-full h-12 px-3 py-2 pr-28 border rounded-[10px]"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
        {children}
      </div>
      {errorMessage && <div className="mt-2 text-red-500">{errorMessage}</div>}
    </div>
  );
}

export default InputField;
