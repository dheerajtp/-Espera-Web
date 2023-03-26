import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: {
    currency: localStorage.getItem("currency")
      ? JSON.parse(localStorage.getItem("currency"))
      : [
          {
            id: 1,
            name: "United Arab Emirates Dirham",
            price: 3.6725,
            code: "AED",
            default: 0,
          },
          {
            id: 2,
            name: "United States Dollar",
            price: 1.0,
            code: "USD",
            default: 1,
          },
          {
            id: 3,
            name: "Bahraini Dinar",
            price: 0.376,
            code: "BHD",
            default: 0,
          },
          {
            id: 4,
            name: "Indian Rupee",
            price: 79.726353,
            code: "INR",
            default: 0,
          },
          {
            id: 5,
            name: "Kuwaiti Dinar",
            price: 0.30803463,
            code: "KWD",
            default: 0,
          },
          { id: 6, name: "Omani Rial", price: 0.3845, code: "KWD", default: 0 },
          { id: 7, name: "Saudi Riyal", price: 3.75, code: "SAR", default: 0 },
          { id: 8, name: "Qatari Rial", price: 3.64, code: "QAR", default: 0 },
        ],
  },
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    updateCurrency: (state, action) => {
      console.log(action.payload);
      state.value.currency = action.payload;
      localStorage.setItem("currency", JSON.stringify(state.value.currency));
    },
    createUser: (state, action) => {
      state.value.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.value.user));
    },
    logoutUser: (state) => {
      state.value.user = {};
      localStorage.setItem("user", JSON.stringify(state.value.user));
    },
  },
});

export const { createUser, logoutUser, updateCurrency } = currencySlice.actions;
export default currencySlice.reducer;
