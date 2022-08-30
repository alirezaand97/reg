import NotVisibility from "@/components/icons/NotVisibility";
import VisibilityIcon from "@/components/icons/VisibilityIcon";
import React, { forwardRef, InputHTMLAttributes, Ref, useState } from "react";

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
        <label
          htmlFor={props.id || props.name}
          className="text-sm mb-2 inline-block"
        >
          {label}
        </label>
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
            className={`w-full h-full text-base border bg-white rounded-md flex items-center outline-none px-4 hover:border-neutral-300 hover:bg-neutral-50 focus:border-2 focus:border-primary-200 placeholder:text-sm
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
        {error && touched ? (
          <span className="block w-full text-sm text-red-500 mt-2">
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);

export default IInput;
