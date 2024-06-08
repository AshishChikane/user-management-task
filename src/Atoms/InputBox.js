import React from "react";

const InputBox = ({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full border px-4 rounded-md py-2 ${
          touched && error ? "border-red-500" : ""
        }`}
      />
      {touched && error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default InputBox;
