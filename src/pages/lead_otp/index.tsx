import { IButton, ResendOtp } from "@/components/general";
import OtpInput from "@/components/general/otp_Input";
import { AuthLayout } from "@/components/layouts";
import { pageNames } from "@/constant";
import { useI18Next } from "@/i18n";
import { CreateLeadReqModel } from "@/models/auth.model";
import { useAppDispatch, useAppSelector } from "@/store";
import { useCreateLeadMutation } from "@/store/services/auth";
import { setUser } from "@/store/user";
import getResendOtpTime from "@/utils/get_resend_otp_time";
import { useFormik } from "formik";
import { parse } from "query-string";
import { Link, useLocation } from "react-router-dom";
import * as Yup from "yup";

const Lead = () => {
  const dispatch = useAppDispatch();
  const { t } = useI18Next();
  const { search } = useLocation();
  const { phone } = parse(search);
  const otpState = useAppSelector((state) => state.auth.otp);
  const [createLead, { data: createLeadData, error }] = useCreateLeadMutation();
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
      .required(t("messages.required", { field: t("general.otpCode") }))
      .test(
        "verificationCode",
        t("messages.fixLength", {
          field: t("general.otpCode"),
          length: otpState?.codeLength,
        }),
        (val) => val?.length === otpState?.codeLength
      ),
  });

  const handleCreateLead = async (
    values: Pick<CreateLeadReqModel, "verificationCode">
  ) => {
    try {
      await createLeadSchema.validate(values);
      await createLead({
        phone: phone as string,
        verificationCode: values.verificationCode,
      }).unwrap();
      dispatch(
        setUser({ token: createLeadData?.token, phone: phone as string })
      );
    } catch (e: any) {
      formik.setFieldError("verificationCode", e?.message);
    }
  };

  const handleChangeOtp = (otp: string) => {
    formik.setFieldValue("verificationCode", otp);
  };

  console.log(otpState);

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
              {t("messages.editField", { field: t("general.mobile") })}
            </Link>
          </div>
          <p className="text-sm">{t("messages.enterOtpCde")}</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2"> {t("general.otpCode")}</div>
          <OtpInput
            value={formik.values.verificationCode}
            onChange={handleChangeOtp}
            autoFocus
            OTPLength={otpState?.codeLength}
            otpType="number"
            disabled={false}
            error={formik.errors.verificationCode}
          />
          <div className="mt-3 text-sm">
            <ResendOtp
              title={t("general.remainingTime")}
              onResendClick={() => console.log("resend")}
              onTimerComplete={() => console.log("completed")}
              maxTime={getResendOtpTime(otpState?.expireDate)}
            />
          </div>
          <div className="mt-8">
            <IButton className="bg-primary-200 text-white" type="submit">
              {t("general.continue")}
            </IButton>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Lead;
