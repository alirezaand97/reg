import { AuthLayout } from "@/components/layouts";
import { Alert, IInput, IModal, IStepper } from "@/components/general";
import IButton from "@/components/general/button";
import OtpInput from "@/components/general/otp-Input";
import ResendOTP from "@/components/general/resend-otp";
import ISelect from "@/components/general/select";
import ITooltip from "@/components/general/tooltip";
import Logo from "@/components/icons/Logo";
import { useState, useEffect } from "react";
import {
  useGenerateCaptchaQuery,
  useRequestLeadMutation,
} from "@/store/services/auth";
import Captcha from "@/components/general/captcha";

const Home = () => {
  const { data: captcha } = useGenerateCaptchaQuery();
  const [requestLead, { data }] = useRequestLeadMutation();

  console.log(captcha);
  return (
    <AuthLayout>
      <div className="h-full ">
        <IButton
          onClick={() =>
            requestLead({ phone: "09919329690", userCaptchaCode: "12345" })
          }
        >
          درخواست
        </IButton>
        <Captcha />
      </div>
    </AuthLayout>
  );
};

export default Home;
