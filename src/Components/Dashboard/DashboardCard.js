import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Typography,
  Paper,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Checkbox, Container } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const DashboardCard = (getList, report) => {
  const array = [
    { name: "Organization 1" },
    { name: "Organization 2" },
    { name: "Organization 3" },
    { name: "Organization 4" },
    { name: "Organization 5" },
  ];

  const [organization, setOrganization] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openNewModal, setOpenNewModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [searchAreaList, setSearchAreaList] = useState([]);
  const [selectedSearchArea, setSelectedSearchArea] = useState(null);
  const { user } = useSelector((state) => state.users);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddOrganization = () => {
    // Check if organization is already added
    if (!organization) {
      setOrganization("New Organization");
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenNewModal = () => {
    setOpenNewModal(true);
  };

  const handleCloseNewModal = () => {
    setOpenNewModal(false);
  };

  // const handleImageUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   setFormData({
  //     ...formData,
  //     images: files,
  //   });
  // };

  const handleNext = () => {
    handleCloseModal();
    handleOpenNewModal();
  };

  async function getSearchAreaList() {
    if (user) {
      try {
        const res = await axios.get(`/api/v1/dogHandler/get/${user?.email}`);
        console.log("res", res);
        if (res.data) {
          const { data } = await axios.get(
            `/api/v1/searchareas/doghandler/${res.data?._id}`
          );
          console.log("list", data);
          setSearchAreaList(data);
        }
      } catch (error) {
        toast.error(error.response.data?.message);
        console.log(error);
      }
    }
  }
  const onSubmitSave = async (data) => {
    const formData = {
      name: "repot name",
      searchArea: "65d4608c15d0060edc07695d",
      geoTag: "geo_tag_value",
      checkedItems: [
        {
          information: data.reportInfo,
          additionalInfo: data.reportAddInfo,
          imageUrl: "image_url_1",
        },
      ],
      dogHandler: "65d4608c15d0060edc07695d",
      signed: "signed_value",
      organizationLogo: "organization_logo_url",
      isSend: false,
      createdAt: new Date(),
    };
    try {
      const { data } = await axios.post("/api/v1/reports", formData);
      toast.success("Report has been Added");
      reset();
      // getList();
      handleNext();
      handleCloseModal();
      // setLoading(false);
    } catch (error) {
      toast.error(error.response.data?.message);
      setLoading(false);
      console.log(error);
    }
  };

  const onSubmitSend = async (data) => {
    const formData = {
      name: "John Doe",
      searchArea: "65d4608c15d0060edc07695d",
      geoTag: "geo_tag_value",
      checkedItems: [
        {
          information: data.reportInfo,
          additionalInfo: data.reportAddInfo,
          imageUrl: "image_url_1",
        },
      ],
      dogHandler: "65d4608c15d0060edc07695d",
      signed: "signed_value",
      organizationLogo: "organization_logo_url",
      isSend: true,
      createdAt: new Date(),
    };
    try {
      const { data } = await axios.post("/api/v1/reports", formData);
      toast.success("Report has been Added");
      reset();
      // getList();
      handleNext();
      handleCloseModal();
      // setLoading(false);
    } catch (error) {
      toast.error(error.response.data?.message);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchAreaList();
  }, [user]);

  return (
    <Container>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "2vmax", padding: "2vmax" }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            style={{
              marginTop: "1vmax",
              marginBottom: "1vmax",
              fontWeight: "bold",
            }}
          >
            Report
          </Typography>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1vmax",
                  boxSizing: "border-box",
                }}
              >
                {searchAreaList?.map((item) => (
                  <ListItem
                    // selected={selectedDogHandler}
                    key={item._id}
                    onClick={() => setSelectedSearchArea(item)}
                    style={{
                      backgroundColor:
                        selectedSearchArea?._id === item._id
                          ? "#C8E1F4"
                          : "transparent",
                    }}
                  >
                    <ListItemText primary={item.name} />
                    {/* <ListItemIcon> */}
                    {/* <DeleteIcon
                        onClick={() => {
                          // deleteSearchArea(item._id);
                        }}
                        sx={{ color: "red" }}
                      /> */}
                    {/* </ListItemIcon> */}
                  </ListItem>
                ))}
              </Paper>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "1vmax",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "1vmax" }}
                  onClick={handleOpenModal}
                >
                  Add report
                </Button>
                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Edit
                </Button> */}
              </Box>
            </Box>
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  marginLeft: "3px",
                  padding: "1vmax",
                  boxSizing: "border-box",
                }}
              >
                {selectedSearchArea ? (
                  <Box>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Area Details
                    </Typography>
                    <Typography variant="body1">
                      <span style={{ fontWeight: "600" }}>Name:</span>{" "}
                      {selectedSearchArea?.name}
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Email:</span>{" "}
                        {selectedSearchArea?.email}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        marginTop: 4,
                      }}
                    >
                      k-Man Details
                    </Typography>
                    <Typography variant="body1">
                      <span style={{ fontWeight: "600" }}>Name:</span>{" "}
                      {selectedSearchArea?.recipient?.name}
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Email:</span>{" "}
                        {selectedSearchArea?.recipient?.email}
                      </Typography>
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Phone:</span>{" "}
                        {selectedSearchArea?.recipient?.phone}
                      </Typography>
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body1" marginTop={20}>
                    No search area is selected
                  </Typography>
                )}
              </Paper>
            </Box>
          </Box>
        </Grid>

        {/* Modal */}
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Add Report</DialogTitle>
          <DialogContent>
            <TextField
              select
              label="Dropdown Menu"
              name="dropdownValue"
              // value={formData.dropdownValue}
              // onChange={handleInputChange}
              fullWidth
              margin="normal"
            >
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
              <MenuItem value="Option 3">Option 3</MenuItem>
            </TextField>
            <Controller
              name="reportInfo"
              control={control}
              // defaultValue={reportInfo?.name || ""}
              defaultValue={""}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="information"
                  variant="outlined"
                  fullWidth
                  // error={errors.reportInfoName ? true : false}
                  // helperText={
                  //   errors.reporteInfoName ? "Information is required" : ""
                  // }
                  style={{ marginBottom: "16px" }}
                />
              )}
            />
            <Controller
              name="reportAddInfo"
              control={control}
              // defaultValue={reportInfo?.name || ""}
              defaultValue={""}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Additional Information"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  // error={errors.reportInfoName ? true : false}
                  // helperText={
                  //   errors.reporteInfoName ? "Information is required" : ""
                  // }
                  style={{ marginBottom: "16px" }}
                />
              )}
            />
            {/* Add images button */}
            <input type="file" multiple />
            {/* Display uploaded images */}
            {/* <List>
              {formData.images.map((image, index) => (
                <ListItem key={index}>
                  <ListItemText primary={image.name} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List> */}
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </DialogContent>
        </Dialog>

        {/* New Modal */}
        <Dialog open={openNewModal} onClose={handleCloseNewModal}>
          <DialogTitle>Save Info</DialogTitle>
          <DialogContent>
            {/* Add checkboxes here */}
            <Box>
              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 1
              </Typography>

              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 2
              </Typography>
              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 3
              </Typography>
              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 4
              </Typography>
              <Typography variant="body1">
                <Checkbox {...label} />
                Checkbox 5
              </Typography>
            </Box>
            {/* Add buttons */}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1vmax",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmitSave)}
              >
                Save Info
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "1vmax" }}
                onClick={handleSubmit(onSubmitSend)}
              >
                Finish
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Grid>
    </Container>
  );
};

export default DashboardCard;
