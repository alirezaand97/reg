import { RequestLeadRes } from "@/models/auth.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthInterface {
  otp?: RequestLeadRes;
}

const initialState: AuthInterface = {};
const auth = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setOtp: (state, action: PayloadAction<RequestLeadRes>) => {
      state.otp = action.payload;
    },
  },
});

export const { setOtp } = auth.actions;
export default auth;
