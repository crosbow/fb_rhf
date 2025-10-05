const NumberInput = ({ value, onChange, ...rest }) => {
  const handleChange = (e) => {
    const value = Number(e.target.value) || 0;

    onChange(value);
  };
  return <input value={value} min={0} onChange={handleChange} {...rest} />;
};
export default NumberInput;
