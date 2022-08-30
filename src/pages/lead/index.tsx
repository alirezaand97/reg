import { IButton, IInput } from "@/components/general";
import Captcha from "@/components/general/captcha";
import Logo from "@/components/icons/Logo";
import { AuthLayout } from "@/components/layouts";
import { pageNames } from "@/constant";
import { mobileRegex } from "@/constant/regex_format";
import { RequestLeadReq } from "@/models/auth.model";
import { useRequestLeadMutation } from "@/store/services/auth";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Lead = () => {
  let navigate = useNavigate();

  const [requestLead, { data, error, isLoading }] = useRequestLeadMutation();

  const handleRequestLead = async (values: RequestLeadReq) => {
    try {
      const data = await requestLead(values).unwrap();
      console.log(data);
      navigate(pageNames.lead_otp);
    } catch (e) {
      console.log(e);
    }
  };

  const createLeadSchema = Yup.object().shape({
    phone: Yup.string()
      .label("mobileNumber")
      .matches(mobileRegex, "فرمت شماره همراه اشتباه است")
      .required("شماره همراه ضروری است"),
    userCaptchaCode: Yup.string()
      .label("username")
      .required("کد امنیتی را وارد کنید"),
  });

  return (
    <AuthLayout>
      <div className="h-full">
        <div className="flex flex-col items-center text-center pb-12">
          <div className="mb-8">
            <Logo className="w-48" />
          </div>
          <h1 className="mb-2 text-xl font-yekanBold">
            ثبت نام در سامانه آگاه اکسپرس
          </h1>
          <p className="text-sm">
            برای استفاده از خدمات آگاه، حساب کاربری خود را ایجاد کنید
          </p>
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
                  placeholder="مثلا 09110000000"
                  label="شماره همراه"
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
                  placeholder="کد را وارد کنید"
                  label="کد امنیتی"
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
                  ثبت نام
                </IButton>
              </div>
              <div className="mt-2 text-primary-200 text-sm">
                قبلاً ثبت نام کرده‌اید؟ وارد شوید
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default Lead;
