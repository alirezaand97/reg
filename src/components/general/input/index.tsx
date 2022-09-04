import React, { InputHTMLAttributes, Ref, forwardRef, useState } from "react";

import NotVisibility from "@/components/icons/NotVisibility";
import VisibilityIcon from "@/components/icons/VisibilityIcon";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
  className?: string;
  error?: string;
  touched?: boolean;
}

const IInput = forwardRef(
  (
    { label, className, error, touched, ...props }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
      <div className={`max-w-full w-full`}>
        {label && (
          <label
            htmlFor={props.id || props.name}
            className="text-sm mb-2 inline-block"
          >
            {label}
          </label>
        )}

        <div className="relative w-full h-12">
          <input
            {...props}
            ref={ref}
            type={
              props.type !== "password"
                ? props.type
                : showPassword
                ? "text"
                : "password"
            }
            className={`i-input
             ${error && touched ? "border-red-500 focus:border-red-500" : ""}
               ${props.disabled ? "bg-neutral-100 hover:bg-neutral-100 " : ""}
               ${className ? className : ""}
        `}
          />
          {props.type == "password" && (
            <span
              className="absolute left-0 pl-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <NotVisibility className="fill-gray-400" />
              ) : (
                <VisibilityIcon className="fill-gray-400" />
              )}
            </span>
          )}
        </div>
        {touched && error ? (
          <span className="i-error-text">{error}</span>
        ) : null}
      </div>
    );
  }
);

export default IInput;
