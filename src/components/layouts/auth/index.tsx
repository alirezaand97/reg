import LEAD from "@/assets/images/lead.jpg";
import React from "react";

type Props = { children: JSX.Element };

const AuthLayout = (props: Props) => {
  return (
    <div className="h-screen py-12">
      <div className="max-w-7xl mx-4 md:mx-auto h-full grid grid-cols-1 md:grid-cols-3 bg-white">
        <div className="col-span-1">{props.children}</div>
        <div className="col-span-2 hidden order-first md:order-last md:flex justify-center items-center">
          <img src={LEAD} className="max-w-3xl"  />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
