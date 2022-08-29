import { Captcha, RequestLeadReq, RequestLeadRes } from "@/models/auth.model";
import service from "./index";

export const auth = service.injectEndpoints({
  endpoints: (build) => ({
    generateCaptcha: build.query<Captcha, void>({
      query: () => "GenerateCaptcha",
      providesTags: ["auth"],
    }),
    requestLead: build.mutation<RequestLeadRes, RequestLeadReq>({
      query: (params) => ({
        url: "RequestLead",
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { endpoints, useGenerateCaptchaQuery, useRequestLeadMutation } =
  auth;
