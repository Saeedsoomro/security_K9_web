import { Box, Container } from "@mui/material";
import "./App.css";
import Hero from "./Components/Home/Hero";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCard from "./Components/Home/Card";
import Location from "./Components/Home/Location";
import SecurityServices from "./Components/Home/SecurityServices";
import OrganizationHero from "./Components/Organization/OrganizationHero";
import OrganizationBox from "./Components/Organization/OrganizationBox";
import Organization from "./Pages/Organization";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import SecurityAreas from "./Pages/SecurityAreas";
import WhyChoose from "./Components/WhyChoose";
import Testimonials from "./Components/Testimonials";
import InformationModal from "./Components/SecurityAreas/ObjectFormModal";
import Layout from "./layout/Layout";
import Dashboard from "./Components/Dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/organization"
            element={
              <Layout>
                <Organization />
              </Layout>
            }
          />
          <Route
            path="/securityareas"
            element={
              <Layout>
                <SecurityAreas />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <LoginSignup />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
