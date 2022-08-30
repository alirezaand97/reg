import { UserInterface } from "@/models/user.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserInterface = { phone: "", token: "" };
const user = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUserPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setUserPhone } = user.actions;
export default user;
