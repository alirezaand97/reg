import { convertSecondsToTime } from "@/utils/convert-seconds-to-time";
import useResendOTP from "@/hooks/use-resend-otp";

interface Props {
  className?: string;
  maxTime?: number;
  onTimerComplete?: () => void;
  timeInterval?: number;
  onResendClick: () => void;
  title?: string;
}

const ResendOTP = ({
  className,
  title = "زمان باقی مانده",
  ...props
}: Props) => {
  const { remainingTime, handelResendClick } = useResendOTP(props);

  return (
    <div className={`max-w-full ${className}`}>
      <span className="ml-2">{title}</span>
      {remainingTime>0 && <span>{convertSecondsToTime(remainingTime)} </span>}

      {remainingTime == 0 && (
        <button
          disabled={remainingTime !== 0}
          onClick={handelResendClick}
          type="button"
        >
          ارسال مجدد
        </button>
      )}
    </div>
  );
};

export default ResendOTP;
