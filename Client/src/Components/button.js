import React from 'react';

const Button = ({text, onClick, className, style}) => {
    return (
        <button className={`button ${className}`} onClick={onClick} style={style}>{text}</button>
    );
};


export default Button;