const FieldSet = ({ label, children }) => {
  return (
    <fieldset>
      <legend className="text-2xl mb-5 text-center text-gray-200 font-bold">
        {label}
      </legend>
      {children}
    </fieldset>
  );
};
export default FieldSet;
