import {
  englishChar,
  lowerCaseRegex,
  numberRegex,
  specialCharRegex,
  upperCaseRegex,
} from "@/constant/regex_format";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

interface Props {
  password: string;
  show?: boolean;
}
const PasswordStrength = (props: Props) => {
  const { password, show } = props;
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    checkStrength() ? setIsValid(true) : setIsValid(false);
  }, [password]);

  const passwordChecklist = {
    uppercase: {
      isValid: upperCaseRegex.test(password) && lowerCaseRegex.test(password),
      message: "شامل حروف بزرگ و کوچک",
    },
    number: {
      isValid: numberRegex.test(password),
      message: "شامل عدد",
    },
    spechialChar: {
      isValid: specialCharRegex.test(password),
      message: "شامل علائم وِیژه",
    },
    length: {
      isValid: password.length >= 8 && password.length <= 20,
      message: "حداقل 8 کاراکتر",
    },
  };

  const checkStrength = () => {
    return Object.values(passwordChecklist).every((item) => item.isValid);
  };
  return (
    <Transition
      show={show}
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="mt-1">
        {!isValid
          ? Object.values(passwordChecklist).map((item, index) => (
              <div className="text-xs" key={index}>
                {
                  <div
                    className={`${
                      item.isValid ? "text-teal-500" : "text-red-500"
                    }`}
                  >
                    {item.message}
                  </div>
                }
              </div>
            ))
          : ""}
      </div>
    </Transition>
  );
};

export default PasswordStrength;
