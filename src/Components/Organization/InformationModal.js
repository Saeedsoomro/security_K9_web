import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const InformationModal = ({ open, handleClose, getList }) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      name: data.organizationName,
      // organizationId: "65d50f062d04677868e3bbf4",
      email: data.organizationEmail,
      address: data.organizationAddress,
      postalCode: data.organizationPostalCode,
      province: data.organizationProvince,
      city: data.organizationCity,
    };
    try {
      const { data } = await axios.post("/api/v1/organization/add", formData);
      toast.success("organization has been added!");
      reset();
      getList();
      handleClose();
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data?.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            width: "80%",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            style={{ marginBottom: "16px" }}
          >
            Add Information
          </Typography>
          <Divider />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
              marginTop: "16px",
            }}
          >
            <Box style={{ width: "45%" }}>
              <Typography variant="h6" style={{ marginBottom: "16px" }}>
                Organization Details
              </Typography>
              <Controller
                name="organizationName"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={errors.organizationName ? true : false}
                    helperText={
                      errors.organizationName ? "Name is required" : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="organizationEmail"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={errors.organizationEmail ? true : false}
                    helperText={
                      errors.organizationEmail ? "Email is required" : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Typography variant="subtitle1" style={{ marginBottom: "8px" }}>
                Address
              </Typography>
              <Controller
                name="organizationAddress"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Address"
                    variant="outlined"
                    fullWidth
                    error={errors.organizationAddress ? true : false}
                    helperText={
                      errors.organizationAddress ? "Address is required" : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="organizationPostalCode"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Postal Code"
                    variant="outlined"
                    fullWidth
                    error={errors.organizationPostalCode ? true : false}
                    helperText={
                      errors.organizationPostalCode
                        ? "Postal Code is required"
                        : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="organizationProvince"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Province"
                    variant="outlined"
                    fullWidth
                    error={errors.organizationProvince ? true : false}
                    helperText={
                      errors.organizationProvince ? "Province is required" : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="organizationCity"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="City"
                    variant="outlined"
                    fullWidth
                    error={errors.organizationCity ? true : false}
                    helperText={
                      errors.organizationCity ? "City is required" : ""
                    }
                  />
                )}
              />
            </Box>
            {/* <Box style={{ width: "45%" }}>
              <Typography variant="h6" style={{ marginBottom: "16px" }}>
                Reporter Details
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "16px" }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "16px" }}
              />
              <Controller
                name="reporterNumber"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Number"
                    variant="outlined"
                    fullWidth
                    error={errors.reporterNumber ? true : false}
                    helperText={
                      errors.reporterNumber ? "Number is required" : ""
                    }
                  />
                )}
              />
            </Box> */}
          </Box>
          <Divider />
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button
              variant="outlined"
              onClick={handleClose}
              style={{ marginRight: "8px" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              color="primary"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default InformationModal;
