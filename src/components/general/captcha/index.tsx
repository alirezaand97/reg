import RefreshIcon from "@/components/icons/RefreshIcon";
import { useGenerateCaptchaQuery } from "@/store/services/auth";
import Base64ToPngConvertor from "@/utils/base64_to_image";
import React from "react";

const Captcha = () => {
  const { data, refetch } = useGenerateCaptchaQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const reCaptcha = () => {
    refetch();
  };
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="cursor-pointer" onClick={reCaptcha}>
        <RefreshIcon className="fill-sky-700" />
      </div>
      <img
        className="cursor-pointer h-ull"
        src={Base64ToPngConvertor(data?.captcha)}
        onClick={reCaptcha}
      />
    </div>
  );
};

export default Captcha;