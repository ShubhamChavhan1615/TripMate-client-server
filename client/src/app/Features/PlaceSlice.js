import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllPlaces } from "../../Services";

const placeSlice = createSlice({
  name: "placeData",
  initialState: [],
  reducers: {
    setPlaces: (state, action) => {
      return action.payload;
    },
    addPlace: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setPlaces, addPlace } = placeSlice.actions;

export const fetchPlaces = () => async (dispatch) => {
  try {
    const response = await axios.get(getAllPlaces);
    dispatch(setPlaces(response.data));
  } catch (error) {
    console.error('Error fetching places data:', error);
  }
};

export default placeSlice.reducer;
