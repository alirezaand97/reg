import { IButton } from "@/components/general";
import ISelect from "@/components/general/select";
import CheckIcon from "@/components/icons/CheckIcon";
import { AuthLayout } from "@/components/layouts";
import { useI18Next } from "@/i18n";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const options = [
    { value: "رشت", label: "رشت" },
    { value: "تهران", label: "تهران" },
    { value: "ساری", label: "ساری" },
  ];
  const [selectedOption, setselectedOption] = useState(null);
  const handleChange = (selectedOption: any) => {
    console.log(selectedOption);
    setselectedOption(selectedOption);
  };
  let navigate = useNavigate();
  const { t } = useI18Next();
  console.log();
  return (
    <AuthLayout>
      <div className="h-full ">
        <div className="flex flex-col items-center">
          <div className="bg-teal-400 max-w-max rounded-full p-1 mb-2">
            <CheckIcon className="fill-white w-8" />
          </div>
          <div className="text-teal-400 text-lg">
            {t("messages.registerSuccess")}
          </div>
          <div className="my-6">{t("messages.registerSuccessMessage")}</div>
        </div>
        <div>
          <Link to={{ pathname: "/" }}>
            <IButton className="bg-primary-200 text-white">
              {t("messages.completeSejam")}
            </IButton>
            <IButton>{t("messages.loginToProfile")}</IButton>
          </Link>
        </div>
        <ISelect
          options={options}
          handleChange={handleChange}
          selectedOption={selectedOption}
        />
      </div>
    </AuthLayout>
  );
};

export default RegisterSuccess;
