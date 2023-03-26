import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Modal,
} from "@mui/material";
import { useAddAddress } from "../../utils/hooks/Cart/useCart";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function AddAddress({ openModal, handleClose }) {
  const theme = useTheme();
  const user = useSelector((state) => state.user.value.user);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });
  const { mutate, isLoading } = useAddAddress();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    const body = {
      user_id: user.user_id,
      address: JSON.stringify(data),
    };
    mutate(body, {
      onSuccess: (data) => {
        console.log("data", data);
        toast.success("Address Added Successfully");
        handleClose();
      },
      onError: () => {
        toast.error("Some error occured");
      },
    });
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid
        container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //   width: 400,
          bgcolor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }} // optional: set a height to fill the screen
      >
        <Box sx={{ maxWidth: "600px", mx: "auto" }}>
          <Typography variant="h5" align="center" sx={{ mb: 3 }}>
            Add Address
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  {...register("name", {
                    required: "Full name is required",
                  })}
                  value={formData.name}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="postalCode"
                  label="Postal Code"
                  variant="outlined"
                  fullWidth
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                  value={formData.postalCode}
                  onChange={handleChange}
                  error={Boolean(errors.postalCode)}
                  helperText={errors.postalCode?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="addressLine1"
                  label="Address Line 1"
                  variant="outlined"
                  fullWidth
                  {...register("addressLine1", {
                    required: "Address line 1 is required",
                  })}
                  value={formData.addressLine1}
                  onChange={handleChange}
                  error={Boolean(errors.addressLine1)}
                  helperText={errors.addressLine1?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="addressLine2"
                  label="Address Line 2"
                  variant="outlined"
                  fullWidth
                  {...register("addressLine2")}
                  value={formData.addressLine2}
                  onChange={handleChange}
                  error={Boolean(errors.addressLine2)}
                  helperText={errors.addressLine2?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  {...register("city", {
                    required: "Address line 1 is required",
                  })}
                  value={formData.city}
                  onChange={handleChange}
                  error={Boolean(errors.city)}
                  helperText={errors.city?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="state"
                  label="State/Province/Region"
                  variant="outlined"
                  fullWidth
                  {...register("state", {
                    required: "Address line 1 is required",
                  })}
                  value={formData.state}
                  onChange={handleChange}
                  error={Boolean(errors.state)}
                  helperText={errors.state?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="country"
                  label="Country"
                  variant="outlined"
                  fullWidth
                  {...register("country", {
                    required: "Address line 1 is required",
                  })}
                  value={formData.country}
                  onChange={handleChange}
                  error={Boolean(errors.country)}
                  helperText={errors.country?.message}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" disabled={isLoading}>
              Add Address
            </Button>
          </Box>
        </Box>
      </Grid>
    </Modal>
  );
}

export default AddAddress;
