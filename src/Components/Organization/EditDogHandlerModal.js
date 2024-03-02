import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const EditDogHandlerModal = ({ open, handleClose, dogHandler, getList }) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      name: data.dogHandlerName,
      organizationId: "65d50f062d04677868e3bbf4",
      email: data.dogHandlerEmail,
      phoneNumber: data.dogHandlerName,
      address: data.dogHandlerAddress,
      postalCode: data.dogHandlerPostalCode,
      province: data.dogHandlerProvince,
      city: data.dogHandlerCity,
      reporter: {
        name: data.reporterName,
        email: data.reporterEmail,
        phoneNumber: data.reporterNumber,
      },
    };
    try {
      const { data } = await axios.put(
        `/api/v1/dogHandler/update/${dogHandler._id}`,
        formData
      );
      toast.success("dog handler  has been updated!");
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

  useEffect(() => {
    // Set default values only when dogHandler is available
    if (dogHandler) {
      reset({
        dogHandlerName: dogHandler.name || "",
        dogHandlerEmail: dogHandler.email || "",
        dogHandlerAddress: dogHandler.address || "",
        dogHandlerPostalCode: dogHandler.postalCode || "",
        dogHandlerProvince: dogHandler.province || "",
        dogHandlerCity: dogHandler.city || "",
        reporterName: dogHandler.reporter?.name || "",
        reporterEmail: dogHandler.reporter?.email || "",
        reporterNumber: dogHandler.reporter?.phoneNumber || "",
      });
    }
  }, [dogHandler, reset]);
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
            Edit Dog handler
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
                Dog Handlers Details
              </Typography>
              <Controller
                name="dogHandlerName"
                control={control}
                defaultValue={dogHandler?.name || ""}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={errors.dogHandlerName ? true : false}
                    helperText={errors.dogHandlerName ? "Name is required" : ""}
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="dogHandlerEmail"
                control={control}
                disabled
                defaultValue={dogHandler?.email || ""}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={errors.dogHandlerEmail ? true : false}
                    helperText={
                      errors.dogHandlerEmail ? "Email is required" : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Typography variant="subtitle1" style={{ marginBottom: "8px" }}>
                Address
              </Typography>
              <Controller
                name="dogHandlerAddress"
                control={control}
                defaultValue={dogHandler?.address || ""}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Address"
                    variant="outlined"
                    fullWidth
                    error={errors.dogHandlerAddress ? true : false}
                    helperText={
                      errors.dogHandlerAddress ? "Address is required" : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="dogHandlerPostalCode"
                control={control}
                defaultValue={dogHandler?.postalCode || ""}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Postal Code"
                    variant="outlined"
                    fullWidth
                    error={errors.dogHandlerPostalCode ? true : false}
                    helperText={
                      errors.dogHandlerPostalCode
                        ? "Postal Code is required"
                        : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="dogHandlerProvince"
                control={control}
                defaultValue={dogHandler?.province || ""}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Province"
                    variant="outlined"
                    fullWidth
                    error={errors.dogHandlerProvince ? true : false}
                    helperText={
                      errors.dogHandlerProvince ? "Province is required" : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="dogHandlerCity"
                control={control}
                defaultValue={dogHandler?.city || ""}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="City"
                    variant="outlined"
                    fullWidth
                    error={errors.dogHandlerCity ? true : false}
                    helperText={errors.dogHandlerCity ? "City is required" : ""}
                  />
                )}
              />
            </Box>
            <Box style={{ width: "45%" }}>
              <Typography variant="h6" style={{ marginBottom: "16px" }}>
                Reporter Details
              </Typography>
              <Controller
                name="reporterName"
                control={control}
                defaultValue={dogHandler?.reporter.name || ""}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={errors.reporterName ? true : false}
                    helperText={errors.reporterName ? "Name is required" : ""}
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="reporterEmail"
                control={control}
                defaultValue={dogHandler?.reporter.email || ""}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={errors.reporterEmail ? true : false}
                    helperText={errors.reporterEmail ? "Email is required" : ""}
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
              <Controller
                name="reporterNumber"
                control={control}
                defaultValue={dogHandler?.reporter.phoneNumber || ""}
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
            </Box>
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

export default EditDogHandlerModal;
