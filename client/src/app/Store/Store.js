import { configureStore } from '@reduxjs/toolkit';
import placeSlice from "../Features/PlaceSlice";
import UserSclice from '../Features/UserSclice';

export const store = configureStore({
  reducer: {
    placeData: placeSlice,
    userProfileData: UserSclice,
  },
});
