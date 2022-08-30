import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<{}> {
  className?: string;
  Icon?: React.ReactNode;
}

const IButton = ({ className, Icon, children, ...props }: Props) => {
  return (
    <button
      className={`i-button
     ${className}`}
      {...props}
    >
      {Icon && (
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {Icon}
        </span>
      )}
      {children}
    </button>
  );
};

export default IButton;
