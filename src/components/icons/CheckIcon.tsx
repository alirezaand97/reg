import React from "react";

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      className={`w-5  ${className}`}
    >
      <path
        id="Path_check"
        data-name="Path / check"
        d="M21,7,9,19,3.5,13.5l1.41-1.41L9,16.17,19.59,5.59Z"
        transform="translate(-0.5 -0.59)"
      />
    </svg>
  );
};

export default CheckIcon;
