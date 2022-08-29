import React from "react";
import IStep, { StepInterface } from "./step";
interface Props {
  steps: Omit<StepInterface, "active" | "completed">[];
  activeStep: number;
  disabledSteps?: number[];
}

const IStepper = (props: Props) => {
  const { steps, activeStep, disabledSteps } = props;
  return (
    <div className="flex justify-between items-center max-w-max">
      {steps.map((step, index) => (
        <IStep
          key={index}
          title={step.title}
          onClick={step.onClick}
          active={
            !(disabledSteps || []).includes(index) && index === activeStep
          }
          completed={
            !(disabledSteps || []).includes(index) && index < activeStep
          }
        />
      ))}
    </div>
  );
};

export default IStepper;
