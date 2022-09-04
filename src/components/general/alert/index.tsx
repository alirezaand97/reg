import CloseIcon from "@/components/icons/CloseIcon";
import React, { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  severity: "info" | "danger" | "success" | "warning" | "dark";
  className?: string;
  onClose?: () => void;
}

const servities = {
  info: "text-sky-500 bg-sky-100",
  danger: "text-rose-500 bg-rose-100",
  success: "text-teal-500 bg-teal-50",
  warning: "text-yellow-600 bg-yellow-100",
  dark: "text-gray-700 bg-gray-100",
};

const iconColors = {
  info: "fill-blue-700 ",
  danger: "fill-red-700",
  success: "fill-teal-700",
  warning: "fill-yellow-700",
  dark: "fill-gray-700",
};

const Alert = ({ severity, className, onClose, children }: Props) => {
  return (
    <div className={`i-alert ${servities[severity]} ${className}`}>
      <div>{children}</div>
      {onClose && (
        <div onClick={onClose} className="cursor-pointer mr-1">
          <CloseIcon className={`${iconColors[severity]}`} />
        </div>
      )}
    </div>
  );
};

export default Alert;
