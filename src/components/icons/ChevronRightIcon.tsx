import React from "react";

const ChevronRightIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      className={`w-5 fill-gray-400 ${className}`}
    >
      <path
        id="Path_chevron-right"
        data-name="Path / chevron-right"
        d="M8.59,16.58,13.17,12,8.59,7.41,10,6l6,6-6,6Z"
        transform="translate(429.41 262)"
      />
    </svg>
  );
};

export default ChevronRightIcon;
