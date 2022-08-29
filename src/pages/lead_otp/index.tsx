import { IInput, IButton, ResendOtp } from "@/components/general";
import Captcha from "@/components/general/captcha";
import OtpInput from "@/components/general/otp_Input";
import { AuthLayout } from "@/components/layouts";
import { pageNames } from "@/constant";
import { mobileRegex } from "@/constant/regex_format";
import { CreateLeadReq, RequestLeadReq } from "@/models/auth.model";
import { useRequestLeadMutation } from "@/store/services/auth";
import { Form, Formik, useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Lead = () => {
  let navigate = useNavigate();

  const createLeadSchema = Yup.object().shape({
    verificationCode: Yup.string()
      .label("verificationCode")
      .required("کد تایید را وارد کنید"),
  });

  const handleCreateLead = async (
    values: Pick<CreateLeadReq, "verificationCode">
  ) => {
    const isValidOtp = await createLeadSchema.isValid(formik.values);
    if (isValidOtp) {
      //do something
    }
  };

  const handleChangeOtp = (otp: string) => {
    formik.setFieldValue("verificationCode", otp);
  };

  const formik = useFormik({
    initialValues: {
      verificationCode: "",
    },
    onSubmit: (values) => {
      handleCreateLead(values);
    },
    enableReinitialize: true,
  });

  return (
    <AuthLayout>
      <div className="h-full ">
        <form onSubmit={formik.handleSubmit}>
          <OtpInput
            value={formik.values.verificationCode}
            onChange={handleChangeOtp}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
          />
          <ResendOtp
            onResendClick={() => console.log("resend")}
            onTimerComplete={() => console.log("completed")}
            maxTime={120}
          />
          <IButton className="bg-primary-200 text-white" type="submit">
            ثبت نام
          </IButton>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Lead;
