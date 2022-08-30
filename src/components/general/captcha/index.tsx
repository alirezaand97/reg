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
    <div className="flex justify-end">
      <div className="max-w-max flex h-12 justify-between items-center">
        <div
          className="cursor-pointer mx-2 bg-sky-50 h-12 w-12 flex justify-center items-center rounded-sm"
          onClick={reCaptcha}
        >
          <RefreshIcon className="fill-sky-700 w-7" />
        </div>
        <img
          className="cursor-pointer h-full rounded-sm"
          src={Base64ToPngConvertor(data?.captcha)}
          onClick={reCaptcha}
        />
      </div>
    </div>
  );
};

export default Captcha;
