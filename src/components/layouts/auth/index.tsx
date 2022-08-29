import LEAD from "@/assets/images/lead.jpg";
import React from "react";

type Props = { children: JSX.Element };

const AuthLayout = (props: Props) => {
  return (
    <div className="h-screen py-8">
      <div className="max-w-5xl mx-4 md:mx-auto h-full grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 shadow-lg">{props.children}</div>
        <div className="col-span-2 hidden order-first md:order-last md:flex justify-center items-center">
          <img src={LEAD} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
