import { IButton, IInput, ISelect, IStepper } from "@/components/general";
import { jalaliDays, jalaliMonths } from "@/constant/date_time";
import { gender } from "@/constant/general";
import { justNumberRegex, persianRegex } from "@/constant/regex_format";
import sejamSteps from "@/constant/sejam_steps";
import { useI18Next } from "@/i18n";
import { BirthDate, SejamIdentityInfoModel } from "@/models/sejam.model";
import getYearsBeforeNow from "@/utils/get_years_before_now";
import toJalali from "@/utils/to_jalali";
import { Form, Formik } from "formik";
import { useState } from "react";

import * as Yup from "yup";
const IdentityInfo = () => {
  const { t } = useI18Next();
  const [dateError, setDateError] = useState(false);
  const IdentityInfoData: SejamIdentityInfoModel<Date> = {};

  const identityInfoSchema = Yup.object().shape({
    gender: Yup.string()
      .label("gender")
      .required(t("messages.selectRequired", { field: t("general.gender") })),
    fatherName: Yup.string()
      .label("fatherName")
      .required(t("messages.required", { field: t("general.fatherName") }))
      .matches(
        persianRegex,
        t("messages.justPersianChar", { field: t("general.fatherName") })
      ),
    identityCode: Yup.string()
      .label("identityCode")
      .required(t("messages.required", { field: t("general.identityNo") }))
      .matches(
        justNumberRegex,
        t("messages.justNumberChar", { field: t("general.identityNo") })
      )
      .test(
        "verificationCode",
        t("messages.fixLength", {
          field: t("general.identityNo"),
          length: 10,
        }),
        (val) => val?.length === 10
      ),
    identitySerialNo: Yup.object({
      number: Yup.string()
        .label("number")
        .required(
          t("messages.required", { field: t("general.identitySerial") })
        )
        .matches(
          justNumberRegex,
          t("messages.justNumberChar", { field: t("general.identitySerial") })
        )
        .test(
          "verificationCode",
          t("messages.fixLength", {
            field: t("general.identitySerial"),
            length: 6,
          }),
          (val) => val?.length === 6
        ),
      serialNo: Yup.string()
        .label("serialNo")
        .required(
          t("messages.required", { field: t("general.identitySeries") })
        )
        .matches(
          justNumberRegex,
          t("messages.justNumberChar", { field: t("general.identitySeries") })
        )
        .test(
          "verificationCode",
          t("messages.fixLength", {
            field: t("general.identitySeries"),
            length: 2,
          }),
          (val) => val?.length === 2
        ),
      character: Yup.string()
        .label("character")
        .required(
          t("messages.selectRequired", {
            field: t("general.identityCharSeries"),
          })
        ),
    }),
    placeOfBirth: Yup.string()
      .label("placeOfBirth")
      .required(t("messages.required", { field: t("general.placeOfBirth") }))
      .matches(
        persianRegex,
        t("messages.justPersianChar", { field: t("general.placeOfBirth") })
      ),
    placeOfIssue: Yup.string()
      .label("placeOfBirth")
      .required(t("messages.required", { field: t("general.placeOfIssue") }))
      .matches(
        persianRegex,
        t("messages.justPersianChar", { field: t("general.placeOfIssue") })
      ),
    birthDate: Yup.object({
      year: Yup.string()
        .label("year")
        .required(
          t("messages.selectRequired", { field: t("general.birthDate") })
        ),
      month: Yup.string()
        .label("month")
        .required(
          t("messages.selectRequired", { field: t("general.birthDate") })
        ),
      day: Yup.string()
        .label("day")
        .required(
          t("messages.selectRequired", { field: t("general.birthDate") })
        ),
    }),
  });

  const validateDate = (params?: BirthDate) => {
    const { year, month, day } = params as BirthDate;
    const dateIsValid = toJalali(`${year}-${month}-${day}`).isValid();
    if (!dateIsValid) {
      setDateError(true);
      throw Error("Date Error");
    }
    setDateError(false);
    return dateIsValid;
  };

  const handleCreateIdentityInfo = async (
    params: SejamIdentityInfoModel<BirthDate>
  ) => {
    const isValid = validateDate(params.birthDate);
    if (isValid) {
      console.log("createOpportunity", params);
    }

    try {
    } catch (error) {
      console.log("createOpportunity", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mb-6">
        <h1 className="mb-3 font-yekanBold text-lg">?????????????? ??????????</h1>
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
            setFieldError,
          }) => (
            <Form>
              <div className="flex">
                <div className="w-1/2 mx-1">
                  <ISelect
                    name="gender"
                    options={gender}
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
                  maxLength={10}
                />
              </div>
              <div className="mt-5">
                <div className="i-label">{t("general.identitySerial")}</div>
                <div className="flex flex-end">
                  <div className="w-2/4 mx-1">
                    <IInput
                      type="text"
                      name="identitySerialNo.number"
                      placeholder="000000"
                      onChange={handleChange}
                      error={errors.identitySerialNo?.number}
                      value={values.identitySerialNo?.number}
                      onBlur={handleBlur}
                      touched={touched.identitySerialNo?.number}
                      maxLength={6}
                      showError={false}
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
                      maxLength={2}
                      showError={false}
                    />
                  </div>
                  <div className="w-1/4 mx-1">
                    <ISelect
                      name="identitySerialNo.character"
                      options={[
                        { value: "??????", label: "??????" },
                        { value: "??", label: "??" },
                      ]}
                      placeholder={t("general.select")}
                      getOptionValue={(option) => option.value}
                      onChange={(option) =>
                        setFieldValue(
                          "identitySerialNo.character",
                          option?.value
                        )
                      }
                      onBlur={() =>
                        setFieldTouched("identitySerialNo.character")
                      }
                      touched={touched.identitySerialNo?.character}
                      error={errors.identitySerialNo?.character}
                      showError={false}
                    />
                  </div>
                </div>
                <div className="i-error-text">
                  {(touched.identitySerialNo?.number &&
                    errors.identitySerialNo?.number) ||
                    (touched.identitySerialNo?.serialNo &&
                      errors.identitySerialNo?.serialNo) ||
                    (touched.identitySerialNo?.character &&
                      errors.identitySerialNo?.character)}
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
              <div className="mt-5">
                <div className="i-label">{t("general.birthDate")}</div>
                <div className="flex items-end">
                  <div className="w-1/3 mx-1">
                    <ISelect
                      name="birthDate.day"
                      options={jalaliDays}
                      placeholder={t("general.day")}
                      onChange={(option) =>
                        setFieldValue("birthDate.day", option?.value)
                      }
                      onBlur={() => setFieldTouched("birthDate.day")}
                      error={errors.birthDate?.day}
                      touched={touched.birthDate?.day}
                      showError={false}
                    />
                  </div>
                  <div className="w-1/3 mx-1">
                    <ISelect
                      name="birthDate.month"
                      options={jalaliMonths}
                      placeholder={t("general.month")}
                      onChange={(option) =>
                        setFieldValue("birthDate.month", option?.value)
                      }
                      onBlur={() => setFieldTouched("birthDate.month")}
                      error={errors.birthDate?.month}
                      touched={touched.birthDate?.month}
                      showError={false}
                    />
                  </div>
                  <div className="w-1/3 mx-1">
                    <ISelect
                      name="birthDate.year"
                      options={getYearsBeforeNow()}
                      placeholder={t("general.year")}
                      onChange={(option) =>
                        setFieldValue("birthDate.year", option?.value)
                      }
                      onBlur={() => setFieldTouched("birthDate.year")}
                      error={errors.birthDate?.year}
                      touched={touched.birthDate?.year}
                      showError={false}
                    />
                  </div>
                </div>
                <div className="i-error-text">
                  {(touched.birthDate?.year && errors.birthDate?.year) ||
                    (touched.birthDate?.month && errors.birthDate?.month) ||
                    (touched.birthDate?.day && errors.birthDate?.day) ||
                    (dateError && t("messages.invalidDate"))}
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
