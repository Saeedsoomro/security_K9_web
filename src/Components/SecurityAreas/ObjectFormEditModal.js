import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import RemoveIcon from "@mui/icons-material/Remove";

const ObjectFormEditModal = ({
  open,
  handleClose,
  searchAreaId,
  getList,
  objectForm,
}) => {
  const [checklistItems, setChecklistItems] = useState([]);
  const [checklistName, setCheckListName] = useState("");
  const [checklistInstruction, setCheckListInstructions] = useState("");
  const [selectedChecklistItem, setSelectedChecklistItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    postalCode: "",
    province: "",
    city: "",
    checklist: "",
    checklistItemName: "",
    instructions: "",
  });
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
      checklist: checklistItems.map((item) => {
        return {
          name: item.name,
          instructions: item.instructions,
        };
      }),
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

  const handleAddChecklistItem = () => {
    if (checklistName !== "") {
      const newItem = {
        _id: checklistItems.length + 1,
        name: checklistName,
        instructions: checklistInstruction,
      };
      console.log(newItem);
      setChecklistItems([...checklistItems, newItem]);
      setFormData({
        ...formData,
        checklistItemName: "",
        instructions: "",
      });
    }
  };

  const handleEditChecklistItem = () => {
    setChecklistItems((prev) => {
      const index = prev.findIndex(
        (item) => item._id === selectedChecklistItem
      );
      if (index !== -1) {
        prev[index].name = checklistName;
        prev[index].instructions = checklistInstruction;
      }
      return prev;
    });
    setCheckListInstructions("");
    setCheckListName("");
    setSelectedChecklistItem("");
  };

  const handleDeleteChecklistItem = () => {
    if (selectedChecklistItem) {
      setChecklistItems((prev) =>
        prev.filter((item) => item._id !== selectedChecklistItem)
      );
      setCheckListInstructions("");
      setCheckListName("");
      setSelectedChecklistItem(null);
    }
  };

  function handleSelectItem(id) {
    const item = checklistItems.find((item) => item._id === id);
    setCheckListInstructions(item.instructions);
    setCheckListName(item.name);
    setSelectedChecklistItem(id);
  }

  function handleRemoveItem() {
    setCheckListInstructions("");
    setCheckListName("");
    setSelectedChecklistItem("");
  }

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
    setChecklistItems(objectForm?.checklist);
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
                <TextField
                  select
                  label="Checklist"
                  variant="outlined"
                  value={selectedChecklistItem}
                  fullWidth
                  onChange={(e) => handleSelectItem(e.target.value)}
                  margin="normal"
                >
                  {checklistItems?.map((item) => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Checklist Item Name"
                  variant="outlined"
                  onChange={(e) => setCheckListName(e.target.value)}
                  value={checklistName}
                  defaultValue=""
                  fullWidth
                  // error={Boolean(errors.checklistItemName)}
                  helperText={
                    errors.checklistItemName
                      ? errors.checklistItemName.message
                      : ""
                  }
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  multiline
                  rows={4}
                  value={checklistInstruction}
                  defaultValue=""
                  onChange={(e) => setCheckListInstructions(e.target.value)}
                  label="Instructions"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
                {!selectedChecklistItem ? (
                  <Button variant="contained" onClick={handleAddChecklistItem}>
                    Add New
                  </Button>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleEditChecklistItem}
                      >
                        Save
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{ color: "red", marginLeft: "4px" }}
                        onClick={handleDeleteChecklistItem}
                      >
                        Delete
                      </Button>
                    </div>
                    <IconButton
                      variant="oultined"
                      color="red"
                      onClick={handleRemoveItem}
                    >
                      <RemoveIcon sx={{ color: "red" }} />
                    </IconButton>
                  </div>
                )}
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
