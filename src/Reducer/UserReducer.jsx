import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Data/Data";

const UserSlice = createSlice({
    name: "users",
    initialState: UserData,
    reducers: {

    }
})


export default UserSlice.reducer
