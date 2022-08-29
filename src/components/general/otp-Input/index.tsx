import useOTP from "@/hooks/use-otp";
import { useMemo } from "react";
import PinItem from "./pin-item";

interface Props {
  className?: string;
  inputClassName?: string;
  OTPLength?: number;
  onChange: (otp: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  secure?: boolean;
  otpType: string;
  value?: string | number;
  placeholder?: string[];
}

const OtpInput = ({
  OTPLength = 4,
  disabled = false,
  autoFocus = false,
  value = "",
  onChange,
  otpType,
  secure = false,
  className,
  inputClassName,
  placeholder,
}: Props) => {
  const {
    activeInput,
    getOtpValue,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
  } = useOTP({
    autoFocus,
    value,
    otpType,
    onChange,
    OTPLength,
  });

  const renderInputs = useMemo(() => {
    const otp = getOtpValue();
    const inputs = [];

    for (let index = 0; index < OTPLength; index++) {
      inputs.push(
          <PinItem
            className={inputClassName}
            key={index}
            focus={activeInput === index}
            value={otp[index]}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onInput={handelOnInput}
            onPaste={handleOnPaste}
            onInputFocus={onInputFocus}
            index={index}
            disabled={disabled}
            autoFocus={autoFocus}
            secure={secure}
            data-testid="input"
            otpType={otpType}
            placeholder={placeholder && placeholder[index]}
          />
      );
    }

    return inputs;
  }, [
    getOtpValue,
    OTPLength,
    inputClassName,
    activeInput,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
    disabled,
    autoFocus,
    secure,
    otpType,
    placeholder,
  ]);

  return (
    <div
      className={`flex flex-row-reverse max-w-full justify-between ${className}`}
    >
      {renderInputs}
    </div>
  );
};

export default OtpInput;
