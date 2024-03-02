import React, { useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  MenuItem,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const ObjectFormEditModal = ({
  open,
  handleClose,
  searchAreaId,
  getList,
  objectForm,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const mappedData = {
      name: data.name,
      searchArea: searchAreaId,
      email: data.email,
      address: data.address,
      postalCode: data.postalCode,
      province: data.province,
      city: data.city,
      checklist: data.checklist,
      checklistItemName: data.checklistItemName,
      instructions: data.instructions,
    };
    try {
      const { data } = await axios.put(
        `/api/v1/formData/update/${objectForm._id}`,
        mappedData
      );
      toast.success("object form has been updated!");
      reset();
      getList();
      handleClose();
    } catch (error) {
      toast.error(error.response.data?.message);

      console.log(error);
    }
    handleClose();
  };

  useEffect(() => {
    if (objectForm) {
      reset({
        name: objectForm?.name || "",
        email: objectForm?.email || "",
        address: objectForm?.address || "",
        postalCode: objectForm?.postalCode || "",
        province: objectForm?.province || "",
        city: objectForm?.city || "",
        checklist: objectForm?.checklist || "",
        checklistItemName: objectForm?.checklistItemName || "",
        instructions: objectForm?.instructions || "",
      });
    }
  }, [objectForm]);
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
            Edit Object Form
          </Typography>
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  Recipient Details
                </Typography>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Name"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.name)}
                      helperText={errors.name ? errors.name.message : ""}
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.email)}
                      helperText={errors.email ? errors.email.message : ""}
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                />
                <Typography variant="subtitle1" style={{ marginBottom: "8px" }}>
                  Address
                </Typography>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Address is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Address"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.address)}
                      helperText={errors.address ? errors.address.message : ""}
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                />
                <Controller
                  name="postalCode"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Postal Code is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Postal Code"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.postalCode)}
                      helperText={
                        errors.postalCode ? errors.postalCode.message : ""
                      }
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                />
                <Controller
                  name="province"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Province is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Province"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.province)}
                      helperText={
                        errors.province ? errors.province.message : ""
                      }
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  rules={{ required: "City is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="City"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.city)}
                      helperText={errors.city ? errors.city.message : ""}
                    />
                  )}
                />
              </Box>
              <Box style={{ width: "45%" }}>
                <Typography variant="h6" style={{ marginBottom: "16px" }}>
                  Checklist
                </Typography>
                <Controller
                  name="checklist"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Checklist is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Checklist"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.checklist)}
                      helperText={
                        errors.checklist ? errors.checklist.message : ""
                      }
                      margin="normal"
                    >
                      <MenuItem value="Option 1">Option 1</MenuItem>
                      <MenuItem value="Option 2">Option 2</MenuItem>
                      <MenuItem value="Option 3">Option 3</MenuItem>
                    </TextField>
                  )}
                />
                <Controller
                  name="checklistItemName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Checklist Item Name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Checklist Item Name"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.checklistItemName)}
                      helperText={
                        errors.checklistItemName
                          ? errors.checklistItemName.message
                          : ""
                      }
                      style={{ marginBottom: "16px" }}
                    />
                  )}
                />
                <Controller
                  name="instructions"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      multiline
                      rows={4}
                      label="Instructions"
                      variant="outlined"
                      fullWidth
                      style={{ marginBottom: "16px" }}
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
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ObjectFormEditModal;
