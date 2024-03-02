import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    for (const key in formData) {
      if (!formData[key].trim()) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Submit the form
      setLoading(true);
      try {
        const { data } = await axios.post("/api/v1/send_Email", formData);
        toast.success("Email has been sent");
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          location: "",
          message: "",
        });
        setLoading(false);
      } catch (error) {
        toast.error(error.data?.message);
        setLoading(false);
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundImage: "url('security.png')",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid spacing={3}>
        {/* First Div */}
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              backgroundColor: "transparent",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              K9 Report
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "20px" }}>
              Specialsök med akrediterade sökhundar
            </Typography>
          </Paper>
        </Grid>

        {/* Second Div */}
        {/* <Grid item xs={12} sm={6}>
          <Paper elevation={0} sx={{ p: 2, backgroundColor: "transparent" }}>
            <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
              GET A FREE QUOTE TODAY
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    fullWidth
                    className="homeCommon"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    className="homeCommon"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    error={!!formErrors.phoneNumber}
                    helperText={formErrors.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email Id"
                    fullWidth
                    className="homeCommon"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Location"
                    fullWidth
                    className="homeCommon"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    error={!!formErrors.location}
                    helperText={formErrors.location}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    className="homeCommon"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!formErrors.message}
                    helperText={formErrors.message}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button variant="contained" color="primary" type="submit">
                    {loading ? <CircularProgress size={24} /> : "Send"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Hero;
