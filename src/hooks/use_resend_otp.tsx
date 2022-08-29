import { useState, useEffect, useRef } from "react";

interface Props {
  maxTime?: number;
  onTimerComplete?: () => void;
  timeInterval?: number;
  onResendClick: () => void;
}
const useResendOTP = ({
  maxTime=60,
  onTimerComplete,
  timeInterval=1000,
  onResendClick,
}: Props) => {
  const timeout = useRef<ReturnType<typeof setInterval>>();

  const [remainingTime, setRemainingTime] = useState<number>(maxTime);

  useEffect(() => {
    if (timeout.current && remainingTime === 0) {
      clearTimeout(timeout.current);
      if (onTimerComplete) {
        onTimerComplete();
      }
    } else {
      timeout.current = setTimeout(() => {
        setRemainingTime((t) => t - 1);
      }, timeInterval);
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [onTimerComplete, remainingTime, timeInterval]);

  const handelResendClick = () => {
    if (onResendClick && remainingTime === 0) {
      onResendClick();
    }
    setRemainingTime(maxTime);
  };

  return {
    handelResendClick,
    remainingTime,
  };
};

export default useResendOTP;
