import { IButton, ResendOtp } from "@/components/general";
import OtpInput from "@/components/general/otp_Input";
import { AuthLayout } from "@/components/layouts";
import { CreateLeadReq } from "@/models/auth.model";
import { useCreateLeadMutation } from "@/store/services/auth";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Lead = () => {
  let navigate = useNavigate();
  const [createLead, { data }] = useCreateLeadMutation();
  const formik = useFormik({
    initialValues: {
      verificationCode: "",
    },
    onSubmit: (values) => {
      handleCreateLead(values);
    },
    enableReinitialize: true,
  });

  const createLeadSchema = Yup.object().shape({
    verificationCode: Yup.string()
      .label("verificationCode")
      .required("کد تایید را وارد کنید"),
  });

  const handleCreateLead = async (
    values: Pick<CreateLeadReq, "verificationCode">
  ) => {
    const isValidOtp = await createLeadSchema.isValid(values);
    if (isValidOtp) {
      await createLead({
        phone: "",
        verificationCode: values.verificationCode,
      }).unwrap();
    }
  };

  const handleChangeOtp = (otp: string) => {
    formik.setFieldValue("verificationCode", otp);
  };

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
            ادامه
          </IButton>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Lead;
