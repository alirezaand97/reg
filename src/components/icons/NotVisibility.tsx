import React from "react";

const NotVisibility = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      className={`w-5 fill-gray-400 ${className}`}
    >
      <path
        id="Path_eye-off"
        data-name="Path / eye-off"
        d="M11.83,9,15,12.16V12a3,3,0,0,0-3-3h-.17m-4.3.8,1.55,1.55A2.755,2.755,0,0,0,9,12a3,3,0,0,0,3,3,2.821,2.821,0,0,0,.65-.08l1.55,1.55A4.967,4.967,0,0,1,7.53,9.8M2,4.27,4.28,6.55,4.73,7A11.833,11.833,0,0,0,1,12a11.822,11.822,0,0,0,15.38,6.66l.43.42L19.73,22,21,20.73,3.27,3M12,7a5,5,0,0,1,5,5,4.8,4.8,0,0,1-.36,1.82l2.93,2.93A11.843,11.843,0,0,0,23,12,11.809,11.809,0,0,0,8,5.2l2.17,2.15A5.049,5.049,0,0,1,12,7Z"
      />
    </svg>
  );
};

export default NotVisibility;
