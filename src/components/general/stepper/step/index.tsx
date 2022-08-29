import CheckIcon from "@/components/icons/CheckIcon";
import React from "react";

export interface StepInterface {
  title?: string | React.ReactNode;
  active: boolean;
  completed: boolean;
  onClick?: () => void;
  className?: string;
}

const IStep = (props: StepInterface) => {
  const { active, completed, onClick, className = "" } = props;
  return (
    <div
      className={`ml-2 rounded-md w-full max-w-full ${className}`}
      onClick={onClick}
    >
      <div
        className={`w-5 h-5 relative rounded-full flex items-center before:content-[''] before:absolute  justify-center before:w-1/2 before:h-1/2 before:rounded-full ${
          active
            ? `bg-[#dbe7ff]  before:bg-primary-200 `
            : " before:bg-gray-100"
        }
        ${completed ? "bg-primary-200 before:content-none" : "bg-white"}
        `}
      >
        {completed && <CheckIcon className="fill-white w-3.5" />}
      </div>
    </div>
  );
};

export default IStep;
