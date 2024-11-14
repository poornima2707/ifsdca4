const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require("../middleware/auth");

// User Dashboard
router.get("/dashboard", auth, (req, res) => {
  try {
    // Simulated dashboard data since we're not using a database
    const dashboardData = {
      requestedBooks: ["Book 1", "Book 2"],
      issuedBooks: ["Book 3"],
      feedback: [{ ebook: "Book 3", rating: 4, comment: "Good" }],
    };
    res.json(dashboardData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// View issued e-books for a user
router.get("/issued-books", auth, (req, res) => {
  try {
    // Simulated issued books
    const issuedBooks = [
      { name: "Book 3", section: "Section 1", dateIssued: "2024-10-01", returnDate: "2024-10-15" },
    ];
    res.json(issuedBooks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get Ebook by ID
router.get("/ebooks/:id", auth, (req, res) => {
  try {
    const ebookId = req.params.id;

    // Simulated check for issued ebook
    const issuedBook = { name: "Book 3", content: "Ebook content" };
    if (!issuedBook) {
      return res.status(403).json({ msg: "Access denied. This e-book is not assigned to you." });
    }

    res.json(issuedBook);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Search Sections and E-books
router.get("/sections", auth, (req, res) => {
  try {
    // Simulated sections
    const sections = [{ name: "Section 1" }, { name: "Section 2" }];
    res.json(sections);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/ebooks", auth, (req, res) => {
  try {
    // Simulated ebooks
    const ebooks = [{ name: "Book 1", section: "Section 1" }, { name: "Book 2", section: "Section 2" }];
    res.json(ebooks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Request E-book
router.post("/ebooks/:id/request", auth, (req, res) => {
  try {
    const ebookId = req.params.id;

    // Simulated request check
    const isAlreadyRequested = false;
    if (isAlreadyRequested) {
      return res.status(400).json({ msg: "You have already requested this e-book" });
    }

    res.json({ msg: "E-book requested successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// View Request Status
router.get("/ebooks/request-status", auth, (req, res) => {
  try {
    // Simulated request status
    const requests = [{ ebook: "Book 1", status: "pending" }];
    res.json(requests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Return E-book
router.post("/ebooks/:id/return", auth, (req, res) => {
  try {
    const ebookId = req.params.id;

    // Simulated return process
    res.json({ msg: "E-book returned successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Feedback for E-book
router.post("/ebooks/:id/feedback", auth, (req, res) => {
  try {
    const { rating, comment } = req.body;

    // Simulated feedback submission
    res.json({ msg: "Feedback submitted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get user profile
router.get("/me", auth, (req, res) => {
  try {
    // Simulated user profile
    const user = { username: "User1", email: "user1@example.com" };
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update User Details
router.put(
  "/me",
  auth,
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    try {
      // Simulated update
      res.json({ username, email, password });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// Delete User Account
router.delete("/me", auth, (req, res) => {
  try {
    // Simulated user deletion check
    const hasIssuedBooks = false;
    if (hasIssuedBooks) {
      return res.status(400).json({ msg: "You must return all issued books before deleting your account." });
    }

    res.json({ msg: "Account deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
