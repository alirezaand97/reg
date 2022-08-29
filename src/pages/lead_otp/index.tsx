import { IInput, IButton, ResendOtp } from "@/components/general";
import Captcha from "@/components/general/captcha";
import OtpInput from "@/components/general/otp_Input";
import { AuthLayout } from "@/components/layouts";
import { pageNames } from "@/constant";
import { mobileRegex } from "@/constant/regex_format";
import { CreateLeadReq, RequestLeadReq } from "@/models/auth.model";
import { useRequestLeadMutation } from "@/store/services/auth";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Lead = () => {
  let navigate = useNavigate();
  const [otp, setotp] = useState("");
  const createLeadSchema = Yup.object().shape({
    otp: Yup.string()
      .label("verificationCode")
      .required("کد تایید را وارد کنید"),
  });

  const handleCreateLead = (
    values: Pick<CreateLeadReq, "verificationCode">
  ) => {
    console.log(values);
  };

  const handleChangeOtp = (otp: string) => {
    setotp(otp);
  };

  return (
    <AuthLayout>
      <div className="h-full ">
        <Formik
          initialValues={{
            verificationCode: otp,
          }}
          validationSchema={createLeadSchema}
          enableReinitialize
          onSubmit={handleCreateLead}
        >
          {({
            handleChange,
            errors,
            values,
            handleBlur,
            touched,
            setFieldValue,
          }) => {
            console.log(errors);
            return (
              <Form>
                <OtpInput
                  value={values.verificationCode}
                  onChange={handleChangeOtp}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  className=""
                />
                <ResendOtp
                  onResendClick={() => console.log("resend")}
                  onTimerComplete={() => console.log("completed")}
                  maxTime={120}
                />
                <IButton className="bg-primary-200 text-white" type="submit">
                  ثبت نام
                </IButton>
              </Form>
            );
          }}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default Lead;
