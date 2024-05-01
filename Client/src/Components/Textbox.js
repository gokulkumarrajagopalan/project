import React from 'react';

const Textbox = ({label, value, onChange, placeholder,style,className}) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} style={style} className={className} />
    </div>
  );
};

export default Textbox;
