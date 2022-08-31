import { convertSecondsToTime } from "@/utils/convert_seconds_to_time";
import useResendOTP from "@/hooks/use_resend_otp";

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
      {remainingTime > 0 && <span>{convertSecondsToTime(remainingTime)} </span>}

      {remainingTime == 0 && (
        <button
          disabled={remainingTime !== 0}
          onClick={handelResendClick}
          type="button"
          className="text-primary-200"
        >
          ارسال مجدد
        </button>
      )}
    </div>
  );
};

export default ResendOTP;
