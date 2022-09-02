import { IButton, IInput } from "@/components/general";
import Captcha from "@/components/general/captcha";
import ISelect from "@/components/general/select";
import Logo from "@/components/icons/Logo";
import { AuthLayout } from "@/components/layouts";
import { pageNames } from "@/constant";
import { mobileRegex } from "@/constant/regex_format";
import { useI18Next } from "@/i18n";
import { RequestLeadReqModel } from "@/models/auth.model";
import { useAppDispatch } from "@/store";
import { setOtp } from "@/store/auth";
import { useRequestLeadMutation } from "@/store/services/auth";
import { Form, Formik } from "formik";
import { stringifyUrl } from "query-string";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  let navigate = useNavigate();
  const { t } = useI18Next();
  const dispatch = useAppDispatch();
  const [requestLead, { data: requestLeadData, error, isLoading }] =
    useRequestLeadMutation();

  const createLeadSchema = Yup.object().shape({
    phone: Yup.string()
      .label("phone")
      .matches(
        mobileRegex,
        t("messages.incorrectFormat", { field: t("general.mobile") })
      )
      .required(t("messages.required", { field: t("general.mobile") })),
    userCaptchaCode: Yup.string()
      .label("userCaptchaCode")
      .required(t("messages.required", { field: t("general.captchaCode") }))
      .test(
        "userCaptchaCode",
        t("messages.fixLength", {
          field: t("general.captchaCode"),
          length: 5,
        }),
        (val) => val?.length === 5
      ),
  });

  const handleRequestLead = async (values: RequestLeadReqModel) => {
    try {
      await requestLead(values).unwrap();
      if (requestLeadData) {
        dispatch(
          setOtp({
            expireDate: requestLeadData.expireDate,
            codeLength: requestLeadData.codeLength,
          })
        );
      }
      navigate(
        stringifyUrl({
          url: pageNames.register_verify,
          query: { phone: values.phone },
        })
      );
    } catch (e) {
      console.log("request lead error:", e);
    }
  };

  return (
    <AuthLayout>
      <div className="h-full">
        <div className="flex flex-col items-center text-center pb-12">
          <div className="mb-8">
            <Logo className="w-48" />
          </div>
          <h1 className="mb-2 text-xl font-yekanBold">
            {t("general.register")}
          </h1>
          <p className="text-sm">{t("messages.signUpSlug")}</p>
        </div>
        <Formik
          initialValues={{
            phone: "",
            userCaptchaCode: "",
          }}
          validationSchema={createLeadSchema}
          enableReinitialize
          onSubmit={handleRequestLead}
        >
          {({ handleChange, errors, values, handleBlur, touched }) => (
            <Form>
              <div>
                <IInput
                  type="text"
                  name="phone"
                  placeholder={t("general.mobilePlaceholdere")}
                  label={t("general.mobile")}
                  onChange={handleChange}
                  error={errors.phone}
                  value={values.phone}
                  onBlur={handleBlur}
                  touched={touched.phone}
                />
              </div>
              <div className="mt-5">
                <IInput
                  type="text"
                  name="userCaptchaCode"
                  placeholder={t("messages.required", {
                    field: t("general.captchaCode"),
                  })}
                  label={t("general.captchaCode")}
                  onChange={handleChange}
                  error={errors.userCaptchaCode}
                  value={values.userCaptchaCode}
                  onBlur={handleBlur}
                  touched={touched.userCaptchaCode}
                />
                <div className="mt-3">
                  <Captcha />
                </div>
              </div>
              <div className="mt-8">
                <IButton
                  className="bg-primary-200 text-white"
                  type="submit"
                  disabled={isLoading}
                >
                  {t("general.submit")}
                </IButton>
              </div>
              <div className="mt-2 text-primary-200 text-sm">
                <span>{t("messages.alreadyRegister")} </span>
                <span> {t("general.enter")}</span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default Register;
