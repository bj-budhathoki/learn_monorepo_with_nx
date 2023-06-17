'use client';
import React from 'react';
interface CSButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyles?: string;
  title: string;
}
const CSButton: React.FC<CSButtonProps> = ({ btnStyles, title, onClick }) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${btnStyles}`}
      onClick={onClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};
export default CSButton;
