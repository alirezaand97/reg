import { RequestLeadResModel } from "@/models/auth.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthInterface {
  otp?: RequestLeadResModel;
}

const initialState: AuthInterface = {};
const auth = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setOtp: (state, action: PayloadAction<RequestLeadResModel>) => {
      state.otp = action.payload;
    },
  },
});

export const { setOtp } = auth.actions;
export default auth;
