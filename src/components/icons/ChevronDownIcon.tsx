import React from "react";

const ChevronDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      className={`w-5 fill-gray-400 ${className}`}
    >
      <path
        id="Path_chevron-down"
        data-name="Path / chevron-down"
        d="M7.41,8.58,12,13.17l4.59-4.59L18,10l-6,6L6,10Z"
        transform="translate(0 -0.58)"
      />
    </svg>
  );
};

export default ChevronDownIcon;
