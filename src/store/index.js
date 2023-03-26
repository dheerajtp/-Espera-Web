import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import currencyReducer from "./features/currency";

const store = configureStore({
  reducer: {
    user: userReducer,
    currency: currencyReducer,
  },
});

export default store;
