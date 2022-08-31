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
      query: () => "GenerateCaptcha",
      providesTags: ["auth"],
    }),
    requestLead: build.mutation<RequestLeadResModel, RequestLeadReqModel>({
      query: (params) => ({
        url: "RequestLead",
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["auth"],
    }),
    createLead: build.mutation<CreateLeadResModel, CreateLeadReqModel>({
      query: (params) => ({
        url: "CreateLead",
        method: "POST",
        body: params,
      }),
    }),
    createOpportunity: build.mutation<void, CreateOpportunityReqModel>({
      query: (params) => ({
        url: "CreateOpportunity",
        method: "POST",
        body: params,
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
