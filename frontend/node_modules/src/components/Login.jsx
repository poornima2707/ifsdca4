import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { role, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (role) {
      // Navigate to libraries page directly after login
      navigate("/librarian");
    }
  }, [role, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mocking login success for demonstration
    const mockResponse = {
      data: {
        token: "mock_token",
        user: {
          role: "user"
        }
      }
    };

    // Dispatch login success with user role and token
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { token: mockResponse.data.token, role: mockResponse.data.user.role },
    });

    // Navigate directly to libraries after successful login
    navigate("/Main");

    // Show success toast
    toast.success("Login successful!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          marginBottom={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          <Typography variant="h2" padding={5} fontWeight="500">
            Login
          </Typography>
          <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            required
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <Button
            startIcon={<LoginIcon />}
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
          <Link to="/register">
            <Button
              endIcon={<PersonAddIcon />}
              sx={{ marginTop: 6, borderRadius: 3 }}
              color="secondary"
            >
              Change to Register
            </Button>
          </Link>
        </Box>
      </form>
    </div>
  );
};

export default Login;
