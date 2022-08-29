import React from "react";

const VisibilityIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      className={`w-5 fill-gray-400 ${className}`}
    >
      <path
        id="Path_eye"
        data-name="Path / eye"
        d="M12,9a3,3,0,1,0,3,3,3,3,0,0,0-3-3m0,8a5,5,0,1,1,5-5,5,5,0,0,1-5,5M12,4.5A11.827,11.827,0,0,0,1,12a11.817,11.817,0,0,0,22,0A11.827,11.827,0,0,0,12,4.5Z"
        transform="translate(0 0.5)"
      />
    </svg>
  );
};

export default VisibilityIcon;
