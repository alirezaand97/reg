import { UserInterface } from "@/models/user.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserInterface = {};
const user = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action: PayloadAction<UserInterface>) => {
      return action.payload;
    },
  },
});

export const { setUser } = user.actions;
export default user;
