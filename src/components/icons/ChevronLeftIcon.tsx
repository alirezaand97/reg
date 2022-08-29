import React from "react";

const ChevronLeftIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      className={`w-5 fill-gray-400 ${className}`}
    >
      <path
        id="Path_chevron-left"
        data-name="Path / chevron-left"
        d="M15.41,16.58,10.83,12l4.58-4.59L14,6,8,12l6,6Z"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
