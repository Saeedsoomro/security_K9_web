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
import axios from "axios";
import { toast } from "react-toastify";

const AddSearchAreaModal = ({
  open,
  handleClose,
  isEdit,
  searchArea,
  dogHandlerId,
  getList,
}) => {
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
      dogHandler: dogHandlerId,
      email: data.dogHandlerEmail,
      phone: data.dogHandlerName,
      recipient: {
        name: data.reporterName,
        email: data.reporterEmail,
        phone: data.reporterNumber,
      },
      instructions: data.instructions,
    };
    try {
      const { data } = await axios.post("/api/v1/searchareas/create", formData);
      toast.success("Search area  has been added!");
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
            Add Search Area
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
                Search Area Details
              </Typography>
              <Controller
                name="dogHandlerName"
                control={control}
                defaultValue={searchArea?.name || ""}
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
                defaultValue={searchArea?.email || ""}
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

              <Controller
                name="instructions"
                control={control}
                defaultValue={searchArea?.province || ""}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="instructions"
                    variant="outlined"
                    fullWidth
                    rows={2}
                    error={errors.instructions ? true : false}
                    helperText={
                      errors.instructions ? "instructions is required" : ""
                    }
                    style={{ marginBottom: "16px" }}
                  />
                )}
              />
            </Box>
            <Box style={{ width: "45%" }}>
              <Typography variant="h6" style={{ marginBottom: "16px" }}>
                Recipient Details
              </Typography>
              <Controller
                name="reporterName"
                control={control}
                defaultValue={searchArea?.reporter.name || ""}
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
                defaultValue={searchArea?.reporter.email || ""}
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
                defaultValue={searchArea?.reporter.phoneNumber || ""}
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

export default AddSearchAreaModal;
