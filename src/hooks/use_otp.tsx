import React, { useState } from "react";

const numberRegex = /^\d+$/;
const alphaRegex = /^[a-zA-Z]+$/;
const alphaNumericRegex = /[^A-Za-z0-9]/g;

interface Props {
  autoFocus: boolean;
  value: string | number;
  otpType: string;
  onChange: (otp: string) => void;
  OTPLength: number;
}

const useOTP = (props: Props) => {
  const { autoFocus, value, otpType, onChange, OTPLength } = props;
  const [activeInput, setActiveInput] = useState(autoFocus ? 0 : -1);

  const getOtpValue = () => (value ? value.toString().split("") : []);

  const handleOtpChange = (otp: string[] | number[]) => {
    let otpValue = otp.join("");
    onChange(otpValue);
  };

  const focusInput = (input: number) => {
    const nextActiveInput = Math.max(Math.min(OTPLength - 1, input), 0);
    setActiveInput(nextActiveInput);
  };

  const focusInputByDirection = (direction = "next") => {
    focusInput(direction === "next" ? activeInput + 1 : activeInput - 1);
  };

  const changeActiveInputValue = (nextValue: string) => {
    const otp = getOtpValue();
    otp[activeInput] = nextValue;
    handleOtpChange(otp);
  };

  const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    let data = (e.target as HTMLInputElement).value;

    const otp = getOtpValue();

    const clipboardData =
      process.env.NODE_ENV === "test"
        ? data.slice(0, OTPLength - activeInput).split("")
        : e.clipboardData
            .getData("text/plain")
            .slice(0, OTPLength - activeInput)
            .split("");

    for (let pos = 0; pos < OTPLength; ++pos) {
      if (pos >= activeInput && clipboardData.length > 0) {
        otp[pos] = clipboardData.shift() || "";
      }
    }

    let filteredOtpValue = [];
    let validCharIndex = 0;
    for (let charIndex = 0; charIndex < otp.length; ++charIndex) {
      if (isValidateChar(otp[charIndex])) {
        filteredOtpValue[validCharIndex] = otp[charIndex];
        validCharIndex++;
      }
    }

    handleOtpChange(filteredOtpValue);
  };

  const isValidateChar = (char: string) => {
    switch (otpType) {
      case "number":
        return numberRegex.test(char);
      case "alpha":
        return alphaRegex.test(char);
      case "alphanumeric":
        return alphaNumericRegex.test(char);
      default:
        return true;
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isValidateChar(e.target.value)) {
      changeActiveInputValue(e.target.value);
      focusInputByDirection("next");
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Backspace":
        e.preventDefault();
        changeActiveInputValue("");
        focusInputByDirection("prev");
        break;
      case "Delete":
        e.preventDefault();
        changeActiveInputValue("");
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusInputByDirection("next");
        break;
      case "ArrowRight":
        e.preventDefault();
        focusInputByDirection("prev");
        break;
      default:
        break;
    }
  };

  const handelOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1) {
      e.preventDefault();
      focusInputByDirection("next");
    }
  };

  const onInputFocus = (
    index: number,
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setActiveInput(index);
    event.target.select();
  };

  return {
    activeInput,
    getOtpValue,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
  };
};

export default useOTP;
