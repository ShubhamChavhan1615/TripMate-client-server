import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserProfileServer } from "../../Services";

const userProfileSlice = createSlice({
    name: "userProfileData",
    initialState: [],
    reducers: {
        setUserProfile: (state, action) => {
            return action.payload;
        },
        addUserProfile: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { setUserProfile, addUserProfile } = userProfileSlice.actions;

export const fetchUserProfile = () => async (dispatch) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
        console.error('No auth token found');
        return;
    }
    try {
        const response = await axios.get(getUserProfileServer, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        dispatch(setUserProfile(response.data.user));
    } catch (error) {
        console.error('Error fetching user profile data:', error);
    }
};

export default userProfileSlice.reducer;
