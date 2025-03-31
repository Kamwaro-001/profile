import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "@/store/settings/details";
import authReducer from "@/store/auth/auth";

const store = configureStore({
  reducer: {
    // Add your reducers here
    auth: authReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
