const bcrypt = require('bcryptjs');

// Create a librarian without connecting to the database
const createLibrarian = async () => {
    try {
        const { DEFAULT_LIBRARIAN_USERNAME, DEFAULT_LIBRARIAN_PASSWORD, DEFAULT_LIBRARIAN_EMAIL } = process.env;

        // Mock librarian object (without database interaction)
        const librarian = {
            username: DEFAULT_LIBRARIAN_USERNAME,
            password: DEFAULT_LIBRARIAN_PASSWORD,
            email: DEFAULT_LIBRARIAN_EMAIL,
            role: 'librarian'
        };

        const salt = await bcrypt.genSalt(10);
        librarian.password = await bcrypt.hash(librarian.password, salt);

        // Log the librarian details (without saving to DB)
        console.log('Librarian created:');
        console.log(`Username: ${librarian.username}`);
        console.log(`Password (hashed): ${librarian.password}`);
        console.log(`Email: ${librarian.email}`);
        console.log(`Role: ${librarian.role}`);
    } catch (err) {
        console.error('Error creating librarian:', err.message);
    }
};

createLibrarian();
