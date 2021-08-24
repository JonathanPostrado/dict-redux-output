import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfoApi } from "../service/api";

const displayUserInfoThunk = createAsyncThunk (
    "users/get",
    async(thunkApi) => {
        const response = await getUserInfoApi()
        return response.data
    }
)
export {
    displayUserInfoThunk,
}