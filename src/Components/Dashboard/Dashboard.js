import React, { useState } from "react";
import Hero from "../Home/Hero";
import OrganizationHero from "../Organization/OrganizationHero";
import { AppBar, Box, Container, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "./Tabpanel";
import { Button } from "@material-ui/core";
import AccordionUsage from "./Accordion";
import AddListModal from "./AddListModal";
import DashboardCard from "./DashboardCard";
import DashboardHero from "./DashboardHero";

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [openListModal, setOpenListModal] = useState(false);

  function handleCloseListModal() {
    setOpenListModal(false);
  }
  function handleOpenListModal() {
    setOpenListModal(true);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const list = [
    {
      id: 1,
      heading: "List1",
      summary:
        "Nulla id luctus metus. Duis auctor mi eget erat convallis fermentum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur vel magni alias accusamus dolorum enim maxime necessitatibus rem iure dolore nesciunt amet ullam a velit sunt, voluptatum perferendis placeat.",
    },
    {
      id: 2,
      heading: "List2",
      summary:
        "Nulla id luctus metus. Duis auctor mi eget erat convallis fermentum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur vel magni alias accusamus dolorum enim maxime necessitatibus rem iure dolore nesciunt amet ullam a velit sunt, voluptatum perferendis placeat.",
    },
    {
      id: 3,
      heading: "List3",
      summary:
        "Nulla id luctus metus. Duis auctor mi eget erat convallis fermentum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur vel magni alias accusamus dolorum enim maxime necessitatibus rem iure dolore nesciunt amet ullam a velit sunt, voluptatum perferendis placeat.",
    },
  ];
  return (
    <>
      <DashboardHero />
      <DashboardCard />
    </>
  );
};

export default Dashboard;
