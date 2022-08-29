import React from "react";

const ChevronUpIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      className={`w-5 fill-gray-400 ${className}`}
    >
      <path
        id="Path_chevron-up"
        data-name="Path / chevron-up"
        d="M7.41,15.41,12,10.83l4.59,4.58L18,14,12,8,6,14Z"
      />
    </svg>
  );
};

export default ChevronUpIcon;
