import { IButton, ResendOtp } from "@/components/general";
import OtpInput from "@/components/general/otp_Input";
import { AuthLayout } from "@/components/layouts";
import { pageNames } from "@/constant";
import { CreateLeadReq } from "@/models/auth.model";
import { useCreateLeadMutation } from "@/store/services/auth";
import { useFormik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { parse } from "query-string";

const Lead = () => {
  const { search } = useLocation();
  const { phone } = parse(search);
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
        <div className="flex flex-col items-center text-center pb-12">
          <div className="mb-2 text-lg flex items-center">
            <div className="font-yekanBold">{phone}</div>
            <Link
              to={{ pathname: pageNames.lead }}
              className="text-primary-200 mx-4 text-base"
            >
              ویرایش شماره
            </Link>
          </div>
          <p className="text-sm">
            کد یکبار مصرفی که از طریق پیامک دریافت .کرده‌اید را وارد نمایید{" "}
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2">کد تایید</div>
          <OtpInput
            value={formik.values.verificationCode}
            onChange={handleChangeOtp}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
          />
          <div className="mt-3 text-sm">
            <ResendOtp
              onResendClick={() => console.log("resend")}
              onTimerComplete={() => console.log("completed")}
              maxTime={120}
            />
          </div>
          <div className="mt-8">
            <IButton className="bg-primary-200 text-white" type="submit">
              ادامه
            </IButton>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Lead;
