import React from "react";

const getChildId = (children) => {
  let childrenObj = React.Children.only(children);

  return childrenObj.props?.id;
};

const Field = ({ label, htmlFor, className, error, children }) => {
  const id = htmlFor || getChildId(children);

  return (
    <div className={`${className} w-full`}>
      {label && (
        <label htmlFor={id} className="text-lg text-gray-200 mb-2">
          {label}
        </label>
      )}
      {children}
      {!!error && <div className="text-red-500 mt-2"> {error.message} </div>}
    </div>
  );
};
export default Field;
