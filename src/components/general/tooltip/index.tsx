import { Transition } from "@headlessui/react";
import React, { useState } from "react";

interface Props {
  placement?: "top" | "bottom";
  title?: string;
  children: JSX.Element | string;
  className?: string;
}

const ITooltip = (props: Props) => {
  const { children, title, placement, className } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  const handleShowTooltip = () => {
    setShowTooltip(true);
  };
  const handleHideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={`inline-block relative `}
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      <Transition
        show={showTooltip}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`i-tooltip ${
            placement == "top" ? "bottom-full" : "top-full"
          }
          ${className}
          `}
        >
          {title}
        </div>
      </Transition>
      {children}
    </div>
  );
};

export default ITooltip;
