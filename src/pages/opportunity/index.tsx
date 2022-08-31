import { IButton, IInput } from "@/components/general";
import PasswordStrength from "@/components/general/password_strength";
import { AuthLayout } from "@/components/layouts";
import { pageNames } from "@/constant";
import { passwordRegex, persianRegex } from "@/constant/regex_format";
import { useI18Next } from "@/i18n";
import { CreateOpportunityReqModel } from "@/models/auth.model";
import { useAppDispatch } from "@/store";
import { useCreateOpportunityMutation } from "@/store/services/auth";
import checkNationalCode from "@/utils/check_national_code";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Lead = () => {
  let navigate = useNavigate();
  const { t } = useI18Next();
  const [showPassChecklist, setShowPassChecklist] = useState(false);
  const [createOpportunity, { isLoading }] = useCreateOpportunityMutation();
  const createOpportunitySchema = Yup.object().shape({
    nationalCode: Yup.string()
      .label("nationalCode")
      .required(t("messages.required", { field: t("general.nationalCode") }))
      .test(
        "verificationCode",
        t("messages.incorrectFormat", {
          field: t("general.nationalCode"),
        }),
        (val) => (val ? checkNationalCode(val) : false)
      ),
    firstName: Yup.string()
      .label("firstName")
      .required(t("messages.required", { field: t("general.firstName") }))
      .matches(
        persianRegex,
        t("messages.justPersianChar", { field: t("general.firstName") })
      ),
    lastName: Yup.string()
      .label("lastName")
      .required(t("messages.required", { field: t("general.lastName") }))
      .matches(
        persianRegex,
        t("messages.justPersianChar", { field: t("general.lastName") })
      ),
    password: Yup.string()
      .required(t("messages.required", { field: t("general.password") }))
      .matches(
        passwordRegex,
        t("messages.incorrectFormat", {
          field: t("general.password"),
        })
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      t("messages.passwordConfirmError")
    ),
  });

  const handleCreateOpportunity = async ({
    confirmPassword,
    ...params
  }: CreateOpportunityReqModel) => {
    try {
      await createOpportunity(params).unwrap();
      navigate("/");
    } catch (error) {
      console.log("createOpportunity", error);
    }
  };

  return (
    <AuthLayout>
      <div className="h-full">
        <div className="flex flex-col items-center text-center pb-12">
          <h1 className="mb-2 text-xl font-yekanBold">
            {t("general.completeRegister")}
          </h1>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            password: "",
            nationalCode: "",
            confirmPassword: "",
          }}
          validationSchema={createOpportunitySchema}
          enableReinitialize
          onSubmit={handleCreateOpportunity}
        >
          {({ handleChange, errors, values, handleBlur, touched }) => (
            <Form>
              <IInput
                type="text"
                name="nationalCode"
                placeholder={t("general.nationalCode")}
                label={t("general.nationalCode")}
                onChange={handleChange}
                error={errors.nationalCode}
                value={values.nationalCode}
                onBlur={handleBlur}
                touched={touched.nationalCode}
              />
              <div className="mt-5 flex">
                <div className="w-1/2 px-1">
                  <IInput
                    type="text"
                    name="firstName"
                    placeholder={t("general.firstName")}
                    label={t("general.firstName")}
                    onChange={handleChange}
                    error={errors.firstName}
                    value={values.firstName}
                    onBlur={handleBlur}
                    touched={touched.firstName}
                  />
                </div>
                <div className="w-1/2 px-1">
                  <IInput
                    type="text"
                    name="lastName"
                    placeholder={t("general.lastName")}
                    label={t("general.lastName")}
                    onChange={handleChange}
                    error={errors.lastName}
                    value={values.lastName}
                    onBlur={handleBlur}
                    touched={touched.lastName}
                  />
                </div>
              </div>
              <div className="mt-5">
                <IInput
                  type="password"
                  name="password"
                  placeholder={t("general.password")}
                  label={t("general.password")}
                  onChange={handleChange}
                  error={errors.password}
                  value={values.password}
                  onBlur={handleBlur}
                  touched={touched.password}
                  onFocus={() => setShowPassChecklist(true)}
                />
                <PasswordStrength
                  password={values.password}
                  show={showPassChecklist}
                />
              </div>
              <div className="mt-5">
                <IInput
                  type="password"
                  name="confirmPassword"
                  placeholder={t("general.passwordConfirm")}
                  label={t("general.passwordConfirm")}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  touched={touched.confirmPassword}
                />
              </div>
              <div className="mt-8">
                <IButton
                  className="bg-primary-200 text-white"
                  type="submit"
                  disabled={isLoading}
                >
                  {t("general.completeInformation")}
                </IButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default Lead;
