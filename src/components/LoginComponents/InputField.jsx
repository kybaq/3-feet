function InputField({ label, type, placeholder, value, onChange, errorMessage }) {
  return (
    <div className="mb-8">
      <label className="mb-2 text-lg block font-bold">{label}</label>
      <input
        type={type}
        className="w-full h-12 px-3 py-2 border rounded-[10px]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      {errorMessage && <div className="mt-2 text-red-500">{errorMessage}</div>}
    </div>
  );
}

export default InputField;
