import {
  CaptchaModel,
  CreateLeadReqModel,
  CreateLeadResModel,
  CreateOpportunityReqModel,
  RequestLeadReqModel,
  RequestLeadResModel,
} from "@/models/auth.model";

import service from "./index";

export const auth = service.injectEndpoints({
  endpoints: (build) => ({
    generateCaptcha: build.query<CaptchaModel, void>({
      query: () => "/GenerateCaptcha",
      providesTags: ["auth"],
    }),
    requestLead: build.mutation<RequestLeadResModel, RequestLeadReqModel>({
      query: (body) => ({
        url: "/RequestLead",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    createLead: build.mutation<CreateLeadResModel, CreateLeadReqModel>({
      query: (body) => ({
        url: "CreateLead",
        method: "POST",
        body,
      }),
    }),
    createOpportunity: build.mutation<void, CreateOpportunityReqModel>({
      query: (body) => ({
        url: "CreateOpportunity",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  endpoints,
  useGenerateCaptchaQuery,
  useRequestLeadMutation,
  useCreateLeadMutation,
  useCreateOpportunityMutation,
} = auth;
