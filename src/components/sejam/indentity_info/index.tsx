import { IButton, IInput, ISelect, IStepper } from "@/components/general";
import { jalaliMonths } from "@/constant/date_time";
import { persianRegex } from "@/constant/regex_format";
import sejamSteps from "@/constant/sejam_steps";
import { useI18Next } from "@/i18n";
import { SejamIdentityInfoModel } from "@/models/sejam.model";
import getYearsBeforeNow from "@/utils/get_years_before_now";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import * as Yup from "yup";
const IdentityInfo = () => {
  const { t } = useI18Next();
  const [yearOptions, setYearOptions] = useState([]);
  useEffect(() => {
    const years = getYearsBeforeNow();
    console.log(years);
    setYearOptions(years);
  }, []);

  const IdentityInfoData: SejamIdentityInfoModel = {};

  const identityInfoSchema = Yup.object().shape({
    // firstName: Yup.string()
    //   .label("firstName")
    //   .required(t("messages.required", { field: t("general.firstName") }))
    //   .matches(
    //     persianRegex,
    //     t("messages.justPersianChar", { field: t("general.firstName") })
    //   ),
    // lastName: Yup.string()
    //   .label("lastName")
    //   .required(t("messages.required", { field: t("general.lastName") }))
    //   .matches(
    //     persianRegex,
    //     t("messages.justPersianChar", { field: t("general.lastName") })
    //   ),
  });

  const handleCreateIdentityInfo = async (params: SejamIdentityInfoModel) => {
    console.log(params);
    try {
    } catch (error) {
      console.log("createOpportunity", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mb-6">
        <h1 className="mb-3 font-yekanBold text-lg">اطلاعات هویتی</h1>
        <div>
          <IStepper steps={sejamSteps} activeStep={1} />
        </div>
      </div>
      <div>
        <Formik
          initialValues={{
            gender: IdentityInfoData.gender,
            fatherName: IdentityInfoData.fatherName || "",
            identityCode: IdentityInfoData.identityCode || "",
            identitySerialNo: {
              character: IdentityInfoData.identitySerialNo?.character || "",
              number: IdentityInfoData.identitySerialNo?.number || "",
              serialNo: IdentityInfoData.identitySerialNo?.serialNo || "",
            },
            birthDate: {
              year: "",
              month: "",
              day: "",
            },
            placeOfBirth: IdentityInfoData.placeOfBirth || "",
            placeOfIssue: IdentityInfoData.placeOfIssue || "",
          }}
          validationSchema={identityInfoSchema}
          enableReinitialize
          onSubmit={handleCreateIdentityInfo}
        >
          {({
            handleChange,
            errors,
            values,
            handleBlur,
            touched,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form>
              <div className="flex">
                <div className="w-1/2 mx-1">
                  <ISelect
                    name="gender"
                    options={[{ value: "1", label: "مرد" }]}
                    placeholder={t("general.select")}
                    label={t("general.gender")}
                    onChange={(option) =>
                      setFieldValue("gender", option?.value)
                    }
                    onBlur={() => setFieldTouched("gender")}
                    touched={touched.gender}
                    error={errors.gender}
                  />
                </div>
                <div className="w-1/2 mx-1">
                  <IInput
                    type="text"
                    name="fatherName"
                    placeholder={t("general.fatherName")}
                    label={t("general.fatherName")}
                    onChange={handleChange}
                    error={errors.fatherName}
                    value={values.fatherName}
                    onBlur={handleBlur}
                    touched={touched.fatherName}
                  />
                </div>
              </div>
              <div className="mt-5">
                <IInput
                  type="text"
                  name="identityCode"
                  placeholder={t("general.identityNo")}
                  label={t("general.identityNo")}
                  onChange={handleChange}
                  error={errors.identityCode}
                  value={values.identityCode}
                  onBlur={handleBlur}
                  touched={touched.identityCode}
                />
              </div>
              <div className="flex mt-5 items-end">
                <div className="w-2/4 mx-1">
                  <IInput
                    type="text"
                    name="identitySerialNo.number"
                    placeholder="000000"
                    label={t("general.identitySerial")}
                    onChange={handleChange}
                    error={errors.identitySerialNo?.number}
                    value={values.identitySerialNo?.number}
                    onBlur={handleBlur}
                    touched={touched.identitySerialNo?.number}
                  />
                </div>
                <div className="w-1/4 mx-1">
                  <IInput
                    type="text"
                    name="identitySerialNo.serialNo"
                    placeholder="00"
                    onChange={handleChange}
                    error={errors.identitySerialNo?.serialNo}
                    value={values.identitySerialNo?.serialNo}
                    onBlur={handleBlur}
                    touched={touched.identitySerialNo?.serialNo}
                  />
                </div>
                <div className="w-1/4 mx-1">
                  <ISelect
                    name="identitySerialNo.character"
                    options={[
                      { value: "الف", label: "الف" },
                      { value: "ب", label: "ب" },
                    ]}
                    placeholder={t("general.select")}
                    getOptionValue={(option) => option.value}
                    onChange={(option) =>
                      setFieldValue("identitySerialNo.character", option?.value)
                    }
                    onBlur={() => setFieldTouched("identitySerialNo.character")}
                    touched={touched.identitySerialNo?.character}
                    error={errors.identitySerialNo?.character}
                  />
                </div>
              </div>
              <div className="flex mt-5">
                <div className="w-1/2 mx-1">
                  <IInput
                    type="text"
                    name="placeOfBirth"
                    placeholder={t("general.placeOfBirth")}
                    label={t("general.placeOfBirth")}
                    onChange={handleChange}
                    error={errors.placeOfBirth}
                    value={values.placeOfBirth}
                    onBlur={handleBlur}
                    touched={touched.placeOfBirth}
                  />
                </div>
                <div className="w-1/2 mx-1">
                  <IInput
                    type="text"
                    name="placeOfIssue"
                    placeholder={t("general.placeOfIssue")}
                    label={t("general.placeOfIssue")}
                    onChange={handleChange}
                    error={errors.placeOfIssue}
                    value={values.placeOfIssue}
                    onBlur={handleBlur}
                    touched={touched.placeOfIssue}
                  />
                </div>
              </div>

              <div className="flex mt-5 items-end">
                <div className="w-1/3 mx-1">
                  <ISelect
                    name="birthDate.day"
                    options={[]}
                    placeholder={t("general.day")}
                    getOptionValue={(option) => option.value}
                    onChange={(option) =>
                      setFieldValue("birthDate.day", option?.value)
                    }
                    onBlur={() => setFieldTouched("birthDate.day")}
                    touched={touched.birthDate?.day}
                    error={errors.birthDate?.day}
                    label={t("general.day")}
                  />
                </div>
                <div className="w-1/3 mx-1">
                  <ISelect
                    name="birthDate.month"
                    options={jalaliMonths}
                    placeholder={t("general.month")}
                    getOptionValue={(option) => option.value}
                    onChange={(option) =>
                      setFieldValue("birthDate.month", option?.value)
                    }
                    onBlur={() => setFieldTouched("birthDate.month")}
                    touched={touched.birthDate?.month}
                    error={errors.birthDate?.month}
                    label={t("general.month")}
                  />
                </div>
                <div className="w-1/3 mx-1">
                  <ISelect
                    name="birthDate.year"
                    options={yearOptions}
                    placeholder={t("general.year")}
                    onChange={(option) =>
                      setFieldValue("birthDate.year", option?.value)
                    }
                    onBlur={() => setFieldTouched("birthDate.year")}
                    touched={touched.birthDate?.year}
                    error={errors.birthDate?.year}
                    label={t("general.year")}
                  />
                </div>
              </div>

              <div className="mt-12 flex">
                <div className="w-1/4 mx-1">
                  <IButton
                    className="border bg-slate-50 hover:border-primary-200 hover:text-primary-200"
                    type="submit"
                  >
                    {t("general.previous")}
                  </IButton>
                </div>
                <div className="w-3/4 mx-1">
                  <IButton
                    className="bg-primary-200 text-white  "
                    type="submit"
                  >
                    {t("general.continue")}
                  </IButton>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default IdentityInfo;
