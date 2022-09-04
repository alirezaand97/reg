import ISelect from "@/components/general/select";
import { AuthLayout } from "@/components/layouts";
import { useI18Next } from "@/i18n";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SingleValue } from "react-select";
const Sejam = () => {
  const options = [
    { value: "رشت", label: "رشت" },
    { value: "تهران", label: "تهران" },
    { value: "ساری", label: "ساری" },
  ];
  const [selectedOption, setselectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const handleChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    console.log(newValue);
    setselectedOption(newValue);
  };
  const { t } = useI18Next();
  console.log();
  return (
    <AuthLayout>
      <div className="h-full ">
        <ISelect
          options={options}
          onChange={handleChange}
          defaultValue={null}
          placeholder="انتخاب کنید"
        />
      </div>
    </AuthLayout>
  );
};

export default Sejam;
