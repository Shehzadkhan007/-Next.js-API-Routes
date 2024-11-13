import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any additional props here if needed
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props} />;
};
