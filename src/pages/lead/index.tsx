import { IInput, ISwiIButtontch } from "@/components/general";
import { AuthLayout } from "@/components/layouts";
import { pageNames } from "@/constant";
import { mobileRegex } from "@/constant/regex_format";
import { RequestLeadReq } from "@/models/auth.model";
import { useRequestLeadMutation } from "@/store/services/auth";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Lead = () => {
  let navigate = useNavigate();
  const [requestLead, { data, error, isLoading }] = useRequestLeadMutation();
  const [formValues, setFormValues] = useState({
    phone: "",
    userCaptchaCode: "",
  });

  const handleRequestLead = (values: RequestLeadReq) => {
    requestLead(values)
      .unwrap()
      .then((data) => {
        console.log(data);
        navigate(pageNames.lead_otp);
      });
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
      <div className="h-full ">
        <Formik
          initialValues={formValues}
          validationSchema={createLeadSchema}
          enableReinitialize
          onSubmit={handleRequestLead}
        >
          {({ handleChange, errors, values, handleBlur }) => (
            <Form>
              <IInput
                type="text"
                name="phone"
                placeholder="مثلا 09110000000"
                label="شماره همراه"
                onChange={handleChange}
                error={errors.phone}
                value={values.phone}
                onBlur={handleBlur}
              />
              <IInput
                type="text"
                name="userCaptchaCode"
                placeholder="کد را وارد کنید"
                label="کد امنیتی"
                onChange={handleChange}
                error={errors.userCaptchaCode}
                value={values.userCaptchaCode}
                onBlur={handleBlur}
              />
              <ISwiIButtontch
                className="bg-primary-200 text-white"
                type="submit"
                disabled={isLoading}
              >
                ثبت نام
              </ISwiIButtontch>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default Lead;
