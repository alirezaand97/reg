import IInput from "@/components/general/input";
import React, { useEffect, useRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  OTPLength?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  secure?: boolean;
  otpType: string;
  value?: string | number;
  focus: boolean;
  index: number;
  onInputFocus: (
    index: number,
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => void;
}
const PinItem = ({
  focus,
  autoFocus,
  disabled,
  value,
  onInputFocus,
  index,
  secure,
  otpType,
  className,
  ...rest
}: Props) => {
  const input = useRef<HTMLInputElement>(null);
  const componentMounted = useRef<boolean>(false);
  useEffect(() => {
    if (autoFocus && focus && input && input.current) {
      input.current.focus();
    }
  }, []);

  useEffect(() => {
    if (componentMounted.current && focus && input && input.current) {
      input.current.focus();
    }
    componentMounted.current = true;
  }, [focus]);

  const handelInputFocus = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => onInputFocus(index, event);
  let inputType = "text";
  if (secure) {
    inputType = "password";
  } else if (otpType === "number") {
    inputType = "tel";
  }
  return (
    <IInput
      type={inputType}
      maxLength={1}
      ref={input}
      disabled={disabled}
      onFocus={handelInputFocus}
      value={value || ""}
      className={`min-w-0 max-w-[48px] flex-1 h-inp mx-1 px-0 text-center outline-none border border-border rounded-md focus:border-primary ${className}`}
      {...rest}
    />
  );
};

export default React.memo(PinItem);
