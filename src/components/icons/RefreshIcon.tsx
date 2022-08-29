import React from "react";

const RefreshIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      className={`w-5 fill-gray-400 ${className}`}
    >
      <path
        id="Path_refresh"
        data-name="Path / refresh"
        d="M17.65,6.35A8,8,0,1,0,19.73,14H17.65A6,6,0,1,1,12,6a5.915,5.915,0,0,1,4.22,1.78L13,11h7V4Z"
      />
    </svg>
  );
};

export default RefreshIcon;
