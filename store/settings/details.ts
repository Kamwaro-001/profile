// personal details form data
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PersonalDetails {
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  age: number;
}

const initialState: PersonalDetails = {
  firstname: "story",
  lastname: "",
  email: "",
  gender: "",
  age: 0,
};

const DetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<PersonalDetails>) => {
      Object.assign(state, action.payload);
    },
    updateDetails: (state, action: PayloadAction<any>) => {
      const formData = action.payload;
      Object.assign(state, {
        firstname: formData.firstName || state.firstname,
        lastname: formData.lastName || state.lastname,
        email: formData.email || state.email,
        gender: formData.gender || state.gender,
        age: formData.age || state.age,
      });
    },
    clearDetails: () => initialState,
  },
});

export const { setDetails, updateDetails } = DetailsSlice.actions;

export const getDetails = (state: { details: PersonalDetails }) =>
  state.details;

export default DetailsSlice.reducer;
