import React from 'react';
import { ButtonProps } from '@/types/index';

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  disabled = false,
  variant = 'primary',
  iconRight,
}) => {
  const baseclasses =
    'flex items-center text-sm rounded-lg font-medium transition-all';

  const variantClasses = {
    primary: 'bg-[#39383f] text-[#fefefe] px-4 py-2 rounded-lg',
    secondary: 'bg-[#6d47ff] text-gray-100 px-4 py-2 rounded-lg',
    tertiary: 'bg-transparent',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseclasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
    >
      <span>{children}</span>
      {iconRight && <div className="ml-2 h-6 w-6">{iconRight}</div>}
    </button>
  );
};
