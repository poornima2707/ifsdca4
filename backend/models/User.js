// In-memory storage for users
let users = [];

// Function to create a new user
const createUser = (username, password, email, role = 'user') => {
    const newUser = {
        id: users.length + 1, // Simulate an auto-incrementing ID
        username,
        password,
        email,
        role,
        requestedBooks: [],
        issuedBooks: [],
        feedback: []
    };
    users.push(newUser);
    console.log('User created:', newUser);
};

// Function to get all users
const getAllUsers = () => users;

// Function to find a user by username
const getUserByUsername = (username) => users.find(user => user.username === username);

// Function to add feedback for a user
const addFeedback = (username, ebookId, rating, comment) => {
    const user = getUserByUsername(username);
    if (user) {
        const newFeedback = {
            ebook: ebookId,
            rating,
            comment
        };
        user.feedback.push(newFeedback);
        console.log('Feedback added:', newFeedback);
    } else {
        console.log('User not found');
    }
};

// Export functions to create, fetch, and update users
module.exports = { createUser, getAllUsers, getUserByUsername, addFeedback };
