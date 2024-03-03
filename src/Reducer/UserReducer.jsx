import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Data/Data";

const UserSlice = createSlice({
    name: "users",
    initialState: UserData,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})


export const {addUser} = UserSlice.actions;
export default UserSlice.reducer
