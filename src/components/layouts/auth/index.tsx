import LEAD from "@/assets/images/lead.jpg";
import React from "react";

type Props = { children: JSX.Element };

const AuthLayout = (props: Props) => {
  return (
    <div className="h-screen sm:bg-gray-100">
      <div className="h-auto sm:h-full">
        <div className="container mx-auto py-6 md:py-8 px-6  h-full">
          <div className="flex justify-center items-center flex-wrap h-full">
            <div className="xl:w-9/12 w-full h-full">
              <div className="block bg-white sm:shadow-lg rounded-lg h-full">
                <div className="lg:flex py-12 px-2 md:px-12  flex-wrap h-full">
                  <div className="w-full lg:w-6/12 xl:w-5/12 px-4 h-full scroll overflow-y-auto">
                    <div className="md:mx-6">{props.children}</div>
                  </div>
                  <div className="hidden lg:w-6/12 xl:w-7/12 lg:flex pr-8 items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none h-full">
                    <div className="text-white w-full h-full">
                      <img
                        src={LEAD}
                        className="w-full rounded-lg h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
