import { UserModel } from "@/models/user.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserModel = {};
const user = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      return action.payload;
    },
  },
});

export const { setUser } = user.actions;
export default user;
