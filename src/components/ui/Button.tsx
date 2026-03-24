'use client';

import { ButtonVariant, ButtonSize } from '@/lib/types';

type Props = {
  variant: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
};

export default function Button({ variant, size = 'lg', onClick, children, fullWidth = true }: Props) {
  const baseClasses = 'rounded-2xl font-bold transition-all duration-200 active:scale-95';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-md',
    secondary: 'bg-card text-text border-2 border-gray-200 hover:border-primary',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    lg: 'h-16 text-xl px-8',
    md: 'h-13 text-lg px-6',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </button>
  );
}
