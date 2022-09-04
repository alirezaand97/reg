import { AuthLayout } from "@/components/layouts";
import IdentityInfo from "@/components/sejam/indentity_info";
import { useI18Next } from "@/i18n";
const Sejam = () => {
  const { t } = useI18Next();
  console.log();
  return (
    <AuthLayout>
      <div className="h-full">
        <IdentityInfo />
      </div>
    </AuthLayout>
  );
};

export default Sejam;
