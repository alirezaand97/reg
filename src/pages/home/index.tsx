import { AuthLayout } from "@/components/layouts";
import { Alert, IInput, IModal, IStepper } from "@/components/general";
import IButton from "@/components/general/button";
import OtpInput from "@/components/general/otp-Input";
import ResendOTP from "@/components/general/resend-otp";
import ISelect from "@/components/general/select";
import ITooltip from "@/components/general/tooltip";
import Logo from "@/components/icons/Logo";
import { useState ,useEffect} from "react";

const Home = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [Otp, setOtp] = useState("");



  const items = [
    { id: 1, name: "آیتم یک" },
    { id: 2, name: "آیتم دو" },
    { id: 3, name: " آیتم سه" },
  ];

  const [steps, setsteps] = useState([
    {
      onClick: () => {
        setOtp("123456");
      },
    },
    {
      onClick: () => {
        console.log("onClick", 2);
      },
    },
    {
      onClick: () => {
        console.log("onClick", 2);
      },
    },
    {
      onClick: () => {
        console.log("onClick", 3);
      },
    },
    {
      onClick: () => {
        console.log("onClick", 2);
      },
    },
    {
      onClick: () => {
        console.log("onClick", 3);
      },
    },
  ]);

  const [activeStep, setactiveStep] = useState(2);
  

  return (
    <AuthLayout>
      <div className="h-full p-5">
      <Alert severity="danger" onClose={() => console.log("clicked")}>
          هشدار. این مورد هنوز در فاز آزمایشی است
        </Alert>
        <IStepper activeStep={activeStep} steps={steps} />

        {/* default input. default is fullwidth */}
        <IInput
          placeholder=" گذرواژه"
          type="password"
          label="گذرواژه"
        />

        {/* custom width input-this width is equal to design */}
        <div className=" max-w-full">
          <IInput placeholder="نام خانوادگی" label="نام خانوادگی" />
        </div>

        {/* disabled input */}
        <IInput
          placeholder=" 5690072125"
          label="کد ملی"
          disabled
          className="text-left"
        />

        {/* error input */}
        <IInput
          placeholder="نام خانوادگی"
          label="نام خانوادگی"
          error="نام خانوادگی را وارد کنید"
        />

        {/*default button  */}
        <IButton className=" bg-primary-200 text-white hover:bg-primary-300">
          ادامه
        </IButton>
        <br />
        <br />
  

        <IButton
          onClick={() => setmodalOpen(true)}
          className="hover:bg-sky-50 text-primary-200  max-w-max px-4 "
        >
          باز کردن مودال
        </IButton>

        {/* modal */}
        <IModal isOpen={modalOpen} onClose={() => setmodalOpen(false)}>
          <div className="">
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </div>
        </IModal>
        <br />
        <br />
        <div className="w-base max-w-full">
          <OtpInput
            value={Otp}
            onChange={setOtp}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            className=""
          />
        </div>

        <br />
        {/* resend time interval */}
        <ResendOTP
          onTimerComplete={() => console.log("time complete")}
          onResendClick={() => console.log("resend")}
          maxTime={120}
        />
        <br />

        <ITooltip title="متن تصادفی" placement="top">
          <button>هاور کنید</button>
        </ITooltip>
        <br />
        {/* default select-fullwidth */}
        <ISelect
          items={items}
          onChange={(value) => console.log(value)}
          selected={items[0]}
        />
        {/* custo width */}
        <br />
        <ISelect
          className=""
          items={items}
          onChange={(value) => console.log(value)}
          selected={items[0]}
        />
        <br />

        <Logo />

     
      </div>
    </AuthLayout>
  );
};

export default Home;

