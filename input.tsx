import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add any additional props here if needed
}

export const Input: React.FC<InputProps> = (props) => {
  return <input {...props} />;
};
