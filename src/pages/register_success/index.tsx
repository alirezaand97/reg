import { AuthLayout } from "@/components/layouts";
import { useI18Next } from "@/i18n";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  let navigate = useNavigate();
  const { t } = useI18Next();

  return (
    <AuthLayout>
      <div className="h-full">
        success
      </div>
    </AuthLayout>
  );
};

export default RegisterSuccess;
