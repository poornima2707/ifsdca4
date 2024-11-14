import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main"; // Assuming you have this component
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="main-container">
          <Navbar />
          <div className="content">
            <ToastContainer position="top-center" autoClose={1000} />
            <Routes>
              {/* Set the default page to Home */}
              <Route path="/" element={<Home />} />
              
              {/* Define the sequence of pages */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/main" element={<Main />} />

              {/* 404 page for undefined routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
