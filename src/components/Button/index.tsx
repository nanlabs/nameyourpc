import React from 'react';

const buttonVariants = {
  base: 'whitespace-nowrap rounded-3xl px-4 py-2 text-sm lg:text-lg max-w-sm lg:px-6 lg:py-2 xl:px-8 xl:py-3',
  primary: 'btn-primary-gradient text-white',
  option: 'btn-option-gradient text-white',
  secondary: 'bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 text-sm rounded-3xl',
};

export type ButtonVariant = keyof typeof buttonVariants;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button className={`${buttonVariants.base} ${buttonVariants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
