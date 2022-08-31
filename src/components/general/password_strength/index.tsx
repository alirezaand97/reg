import {
  englishChar,
  lowerCaseRegex,
  numberRegex,
  specialCharRegex,
  upperCaseRegex,
} from "@/constant/regex_format";
import { useEffect, useState } from "react";

interface Props {
  password: string;
  show?: boolean;
}
const PasswordStrength = (props: Props) => {
  const { password, show } = props;
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (checkStrength()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [password]);

  const passwordChecklist = {
    uppercase: {
      isValid: upperCaseRegex.test(password),
      message: "حداقل یک حرف بزرگ",
    },
    lowercase: {
      isValid: lowerCaseRegex.test(password),
      message: "حداقل یک حرف کوچک",
    },
    number: {
      isValid: numberRegex.test(password),
      message: "حداقل یک عدد",
    },
    spechialChar: {
      isValid: specialCharRegex.test(password),
      message: "حداقل یک کاراکتر خاص",
    },
    length: {
      isValid: password.length >= 8 && password.length <= 20,
      message: "طول بین 8 تا 20 کاراکتر",
    },
  };

  const checkStrength = () => {
    return Object.values(passwordChecklist).every((item) => item.isValid);
  };
  if (!show) return null;
  return (
    <div className="mt-1">
      {!isValid
        ? Object.values(passwordChecklist).map((item,index) => (
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
  );
};

export default PasswordStrength;
