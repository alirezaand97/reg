import { IButton } from "@/components/general";
import CheckIcon from "@/components/icons/CheckIcon";
import { AuthLayout } from "@/components/layouts";
import { useI18Next } from "@/i18n";
import { Link, useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  let navigate = useNavigate();
  const { t } = useI18Next();
  console.log();
  return (
    <AuthLayout>
      <div className="h-full">
        <div>
          <IButton className="bg-teal-400 max-w-max">
            <CheckIcon />
          </IButton>
        </div>
        <div>{t("messages.registerSuccess")}</div>
        <div>{t("messages.registerSuccessMessage")}</div>
        <div>
          <Link to={{ pathname: "/" }}>
            <IButton className="bg-primary-200 text-white">
              {t("messages.completeSejam")}
            </IButton>
            <IButton>{t("messages.loginToProfile")}</IButton>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterSuccess;
