import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "@/constant/config";

const service = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  reducerPath: "serviceApi",
  tagTypes: ["auth"],
  endpoints: () => ({}),
});

export default service;
