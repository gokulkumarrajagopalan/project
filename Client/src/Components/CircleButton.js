import React from 'react';

const CircleButton = ({ color }) => {
  const buttonStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: color, // Use the color prop for the button background color
    borderRadius: '50%', // Make it a circle
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Text color
    fontSize: '24px',
    border: 'none', // Remove button border
    cursor: 'pointer',
    outline: 'none', // Remove focus outline
  };

  const handleClick = () => {
    // Add your click event logic here
    // For example, you can toggle a state or perform some action
  };

  return (
    <div>
      <style>
        {`
          .circle-button::before {
            content: "\\2713"; /* Unicode checkmark symbol */
            font-weight: bold;
            transform: scale(1.5); /* Adjust the size of the checkmark */
          }
        `}
      </style>
      <button className="circle-button" style={buttonStyle} onClick={handleClick}></button>
    </div>
  );
};

export default CircleButton;
