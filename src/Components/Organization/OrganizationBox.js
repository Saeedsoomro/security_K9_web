import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, Paper, Box } from "@material-ui/core";
import { display } from "@mui/system";
import { Container, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InformationModal from "./InformationModal";
import DogHandlerModal from "./DogHandlerModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import axios from "axios";
import EditDogHandlerModal from "./EditDogHandlerModal";
import AddSearchAreaModal from "./AddSearchAreaModal";
import EditSearchAreaModal from "./EditSearchAreaModal";
import ObjectFormModal from "../SecurityAreas/ObjectFormModal";
import ObjectFormEditModal from "../SecurityAreas/ObjectFormEditModal";
import EditInformationModal from "./EditInformationModal";

const OrganizationBox = () => {
  const [open, setOpen] = useState(false);
  const [selectedDogHandler, setSelectedDogHandler] = useState(null);
  const [selectedSearchArea, setSelectedSearchArea] = useState(null);
  const [openDogHandlerModal, setOpenDogHandlerModal] = useState(false);
  const [openSearchAreaModal, setOpenSearchAreaModal] = useState(false);
  const [openEditSearchAreaModal, setOpenEditSearchAreaModal] = useState(false);
  const [openEditDogHandlerModal, setOpenEditDogHandlerModal] = useState(false);
  const [dogHandlerList, setdogHandlerList] = useState([]);
  const [searchAreaList, setSearchAreaList] = useState([]);

  const [openObjetFormModal, setOpenObjetFormModal] = useState(false);
  const [openEditObjetFormModal, setOpenEditObjetFormModal] = useState(false);
  const [objectFormList, setObjectFormList] = useState([]);
  const [selectedObjectForm, setSelectedObjectForm] = useState(null);

  const [organizationList, setOrganizationList] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [openEditOrgModal, setOpenEditOrgModal] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleEditOrgClose = () => {
    setOpenEditOrgModal(false);
  };

  const handleEditOrgOpen = () => {
    if (selectedOrganization) {
      setOpenEditOrgModal(true);
    }
  };

  const handleDgHanlerModalClose = () => {
    setOpenDogHandlerModal(false);
  };

  const handleDgHanlerModalOpen = () => {
    if (selectedOrganization) {
      setOpenDogHandlerModal(true);
    }
  };

  const handleSearchAreaModalClose = () => {
    setOpenSearchAreaModal(false);
  };

  const handleSearchModalOpen = () => {
    if (selectedDogHandler) {
      setOpenSearchAreaModal(true);
    }
  };
  const handleEditSearchAreaModalClose = () => {
    setOpenEditSearchAreaModal(false);
  };

  const handleObjectFormModalOpen = () => {
    if (selectedSearchArea) {
      setOpenObjetFormModal(true);
    }
  };

  const handleObjectFormModalClose = () => {
    setOpenObjetFormModal(false);
  };

  const handleEditObjectFormModalOpen = () => {
    if (selectedObjectForm) {
      setOpenEditObjetFormModal(true);
    }
  };
  const handleEditObjectFormModalClose = () => {
    setOpenEditObjetFormModal(false);
  };

  const handleEditSearchModalOpen = () => {
    if (selectedDogHandler && selectedSearchArea) {
      setOpenEditSearchAreaModal(true);
    }
  };

  const handleEditDgHanlerModalClose = () => {
    setOpenEditDogHandlerModal(false);
  };

  const handleEditDgHanlerModalOpen = () => {
    if (selectedDogHandler) {
      setOpenEditDogHandlerModal(true);
    }
  };

  function handleSelectDogHandler(item) {
    setSelectedDogHandler(item);
  }

  const array = [
    { name: "Organization 1" },
    { name: "Organization 2" },
    { name: "Organization 3" },
    { name: "Organization 4" },
    { name: "Organization 5" },
  ];

  const [organization, setOrganization] = useState("");

  const handleAddOrganization = () => {
    // Check if organization is already added
    if (!organization) {
      setOrganization("New Organization");
    }
  };

  const handleEdit = () => {
    // Logic to edit organization in one of the boxes
  };

  async function getDogHandlerList() {
    try {
      const { data } = await axios.get(
        `/api/v1/dogHandler/getByOrgId/${selectedOrganization?._id}`
      );

      console.log("dogs", data);
      setdogHandlerList(data);
    } catch (error) {
      toast.error(error.response.data?.message);
      console.log(error);
    }
  }

  async function getSearchAreaList() {
    if (selectedDogHandler) {
      try {
        const { data } = await axios.get(
          `/api/v1/searchareas/doghandler/${selectedDogHandler._id}`
        );

        setSearchAreaList(data);
      } catch (error) {
        toast.error(error.response.data?.message);
        console.log(error);
      }
    }
  }
  async function getObjectFormList() {
    if (selectedSearchArea) {
      try {
        const { data } = await axios.get(
          `/api/v1/formData/searchArea/${selectedSearchArea._id}`
        );

        setObjectFormList(data);
      } catch (error) {
        toast.error(error.response.data?.message);
        console.log(error);
      }
    }
  }
  async function deleteSearchArea(id) {
    if (selectedDogHandler) {
      try {
        const { data } = await axios.delete(`/api/v1/searchareas/delete/${id}`);
        getSearchAreaList();
        toast.success("Search area has been deleted!");
      } catch (error) {
        toast.error(error.response.data?.message);
        console.log(error);
      }
    }
  }
  async function deleteDogHandler(id) {
    if (selectedDogHandler) {
      try {
        const { data } = await axios.delete(`/api/v1/dogHandler/delete/${id}`);
        getDogHandlerList();
        toast.success("Dog handler has been deleted!");
      } catch (error) {
        toast.error(error.response.data?.message);
        console.log(error);
      }
    }
  }
  async function deleteObjectForm(id) {
    if (selectedObjectForm) {
      try {
        const { data } = await axios.delete(`/api/v1/formData/delete/${id}`);
        getObjectFormList();
        toast.success("object form has been deleted!");
      } catch (error) {
        toast.error(error.response.data?.message);
        console.log(error);
      }
    }
  }

  async function getAllOrganization() {
    try {
      const { data } = await axios.get(
        "/api/v1/organization/getAllOrganizations"
      );
      console.log(data);
      setOrganizationList(data);
    } catch (error) {
      toast.error(error.response.data?.message);
      console.log(error);
    }
  }

  useEffect(() => {
    if (selectedOrganization) {
      getDogHandlerList();
    }
  }, [selectedOrganization]);

  useEffect(() => {
    getAllOrganization();
  }, []);

  useEffect(() => {
    getSearchAreaList();
  }, [selectedDogHandler]);

  useEffect(() => {
    getObjectFormList();
  }, [selectedSearchArea]);

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
            Organizations
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1vmax",
                  boxSizing: "border-box",
                  overflowY: "auto",
                }}
              >
                {organizationList?.map((item) => (
                  <ListItem
                    // selected={selectedDogHandler}
                    key={item._id}
                    onClick={() => setSelectedOrganization(item)}
                    style={{
                      backgroundColor:
                        selectedOrganization?._id === item._id
                          ? "#C8E1F4"
                          : "transparent",
                    }}
                  >
                    <ListItemText primary={item.name} />
                    <ListItemIcon>
                      <DeleteIcon
                        onClick={() => {
                          deleteDogHandler(item._id);
                        }}
                        sx={{ color: "red" }}
                      />
                    </ListItemIcon>
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
                  onClick={handleOpen}
                >
                  Add
                </Button>
                <Button
                  onClick={handleEditOrgOpen}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
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
                {selectedOrganization ? (
                  <Box>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Details
                    </Typography>
                    <Typography variant="body1">
                      <span style={{ fontWeight: "600" }}>Name:</span>{" "}
                      {selectedOrganization?.name}
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Email:</span>{" "}
                        {selectedOrganization?.email}
                      </Typography>
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Address:</span>{" "}
                        {selectedOrganization?.address}
                      </Typography>
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body1" marginTop={20}>
                    No organization is selected
                  </Typography>
                )}
              </Paper>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            style={{
              marginTop: "1vmax",
              marginBottom: "1vmax",
              fontWeight: "bold",
            }}
          >
            Dog Handlers
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1vmax",
                  boxSizing: "border-box",
                  overflowY: "auto",
                }}
              >
                {dogHandlerList?.map((item) => (
                  <ListItem
                    // selected={selectedOrganization}
                    key={item._id}
                    onClick={() => handleSelectDogHandler(item)}
                    style={{
                      backgroundColor:
                        selectedDogHandler?._id === item._id
                          ? "#C8E1F4"
                          : "transparent",
                    }}
                  >
                    <ListItemText primary={item.name} />
                    <ListItemIcon>
                      <DeleteIcon
                        onClick={() => {
                          deleteDogHandler(item._id);
                        }}
                        sx={{ color: "red" }}
                      />
                    </ListItemIcon>
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
                  onClick={handleDgHanlerModalOpen}
                >
                  Add
                </Button>
                <Button
                  onClick={handleEditDgHanlerModalOpen}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
              </Box>
            </Box>
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "20rem",
                  marginLeft: "3px",
                  padding: "1vmax",
                  boxSizing: "border-box",
                }}
              >
                {selectedDogHandler ? (
                  <Box>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Details
                    </Typography>
                    <Typography variant="body1">
                      <span style={{ fontWeight: "600" }}>Name:</span>{" "}
                      {selectedDogHandler?.name}
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Email:</span>{" "}
                        {selectedDogHandler?.email}
                      </Typography>
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Address:</span>{" "}
                        {selectedDogHandler?.address}
                      </Typography>
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body1" marginTop={20}>
                    No dog handler is selected
                  </Typography>
                )}
              </Paper>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            style={{
              marginTop: "1vmax",
              marginBottom: "1vmax",
              fontWeight: "bold",
            }}
          >
            Search Areas
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1vmax",
                  boxSizing: "border-box",
                  overflowY: "auto",
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
                    <ListItemIcon>
                      <DeleteIcon
                        onClick={() => {
                          deleteSearchArea(item._id);
                        }}
                        sx={{ color: "red" }}
                      />
                    </ListItemIcon>
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
                  onClick={handleSearchModalOpen}
                >
                  Add
                </Button>
                <Button
                  onClick={handleEditSearchModalOpen}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
              </Box>
            </Box>
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "20rem",
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
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            style={{
              marginTop: "1vmax",
              marginBottom: "1vmax",
              fontWeight: "bold",
            }}
          >
            Object Forms
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1vmax",
                  boxSizing: "border-box",
                  overflowY: "auto",
                }}
              >
                {objectFormList?.map((item) => (
                  <ListItem
                    // selected={selectedDogHandler}
                    key={item._id}
                    onClick={() => setSelectedObjectForm(item)}
                    style={{
                      backgroundColor:
                        selectedObjectForm?._id === item._id
                          ? "#C8E1F4"
                          : "transparent",
                    }}
                  >
                    <ListItemText primary={item.name} />
                    <ListItemIcon>
                      <DeleteIcon
                        onClick={() => {
                          deleteObjectForm(item._id);
                        }}
                        sx={{ color: "red" }}
                      />
                    </ListItemIcon>
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
                  onClick={handleObjectFormModalOpen}
                >
                  Add
                </Button>
                <Button
                  onClick={handleEditObjectFormModalOpen}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
              </Box>
            </Box>
            <Box>
              <Paper
                style={{
                  height: "15rem",
                  width: "20rem",
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
                      ObjectForm Details
                    </Typography>
                    <Typography variant="body1">
                      <span style={{ fontWeight: "600" }}>Name:</span>{" "}
                      {selectedObjectForm?.name}
                      <Typography variant="body1">
                        <span style={{ fontWeight: "600" }}>Email:</span>{" "}
                        {selectedObjectForm?.email}
                      </Typography>
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body1" marginTop={20}>
                    No object form is selected
                  </Typography>
                )}
              </Paper>
            </Box>
          </Box>
        </Grid>
        <DogHandlerModal
          open={openDogHandlerModal}
          getList={getDogHandlerList}
          organization={selectedOrganization}
          handleClose={handleDgHanlerModalClose}
        />
        <AddSearchAreaModal
          open={openSearchAreaModal}
          getList={getSearchAreaList}
          dogHandlerId={selectedDogHandler?._id}
          handleClose={handleSearchAreaModalClose}
        />
        <EditSearchAreaModal
          open={openEditSearchAreaModal}
          getList={getSearchAreaList}
          searchArea={selectedSearchArea}
          dogHandlerId={selectedDogHandler?._id}
          handleClose={handleEditSearchAreaModalClose}
        />
        <EditDogHandlerModal
          getList={getDogHandlerList}
          dogHandler={selectedDogHandler}
          open={openEditDogHandlerModal}
          handleClose={handleEditDgHanlerModalClose}
        />
        <ObjectFormModal
          getList={getObjectFormList}
          searchAreaId={selectedSearchArea?._id}
          open={openObjetFormModal}
          handleClose={handleObjectFormModalClose}
        />
        <ObjectFormEditModal
          getList={getObjectFormList}
          searchAreaId={selectedSearchArea?._id}
          objectForm={selectedObjectForm}
          open={openEditObjetFormModal}
          handleClose={handleEditObjectFormModalClose}
        />
        <InformationModal
          getList={getAllOrganization}
          open={open}
          handleClose={handleClose}
        />
        <EditInformationModal
          organization={selectedOrganization}
          open={openEditOrgModal}
          getList={getAllOrganization}
          handleClose={handleEditOrgClose}
        />
      </Grid>
    </Container>
  );
};

export default OrganizationBox;
