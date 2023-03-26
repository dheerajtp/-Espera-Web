import React, { useState } from "react";
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import Sidebar from "../components/common/Sidebar";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrency } from "../store/features/currency";
import { toast } from "react-toastify";

function Settings() {
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.currency.value);
  const [currentValue, setValue] = useState(
    currency.filter((item) => item.default === 1)[0].id
  );
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const updateCurrencyData = () => {
    const updatedCurrency = currency.map((item) => {
      if (item.id === currentValue) {
        return { ...item, default: 1 };
      } else {
        return { ...item, default: 0 };
      }
    });
    dispatch(updateCurrency(updatedCurrency));
    toast.success("Updated");
  };
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <FormControl style={{ minWidth: 120, marginBottom: 20 }}>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Currency"
            onChange={handleChange}
            value={currentValue}
          >
            {currency.map((item) => {
              return <MenuItem value={item.id}>{item.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            updateCurrencyData();
          }}
        >
          Update
        </Button>
      </div>
      <Sidebar />
    </>
  );
}

export default Settings;
