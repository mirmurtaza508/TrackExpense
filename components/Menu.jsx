import React from "react";

const Menu = ({ label, id, name, value, onChange, error,options,defaultOption }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {
            defaultOption && <option value="" hidden>{defaultOption}</option>
        }
        {
            options.map((option,i)=>{
                return <option key={i}>{option}</option>
            })
        }
        
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default Menu;
