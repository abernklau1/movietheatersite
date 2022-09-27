import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: "guest",
}

const userSlice = createSlice({
  name: initialState.userType,
  initialState,
  reducer: {

  }
})

export default userSlice.reducer;
