const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Mock user data for login and registration
const users = [
  {
    username: "testuser",
    password: "testpassword",
    email: "testuser@example.com",
    role: "user"
  }
];

// Register User (mock)
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  
  // Mock registration process
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ msg: 'User already exists' });
  }
  
  const newUser = { username, password, email, role: "user" };
  users.push(newUser);
  
  // Generate JWT Token
  const payload = { user: { username: newUser.username, role: newUser.role } };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5 days' });

  res.json({ token, msg: 'Registration successful' });
});

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Mocking login success for demonstration
  const mockResponse = {
    data: {
      token: "mock_token",
      user: {
        role: "user" // Make sure the role is correct
      }
    }
  };

  console.log("User Role:", mockResponse.data.user.role); // Debugging line
  
  // Dispatch login success with user role and token
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: { token: mockResponse.data.token, role: mockResponse.data.user.role },
  });

  // Navigate based on user role
  if (mockResponse.data.user.role === "librarian") {
    navigate("/Main");
  } else if (mockResponse.data.user.role === "user") {
    navigate("/user");
  }

  // Show success toast
  toast.success("Login successful!");
};

module.exports = router;
