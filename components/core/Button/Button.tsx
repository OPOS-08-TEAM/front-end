import type { ReactNode } from 'react';

export type TButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export const Button = ({
  type = 'button',
  children,
  className,
  ...props
}: TButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`flex w-full min-w-max items-center justify-center rounded-lg bg-red px-5 py-2 text-lg  text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
