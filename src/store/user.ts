import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const user = createSlice({
  initialState,
  name: "user",
  reducers: { setUser: () => {} },
});

export default user;
