// Dummy in-memory storage for Sections
let sections = [];

// In-memory representation of a Section
const createSection = (name, description) => {
    const newSection = {
        id: sections.length + 1, // Simulate an auto-incrementing ID
        name,
        description,
        dateCreated: new Date()
    };
    sections.push(newSection);
    console.log('Section created:', newSection);
};

// Fetch all sections
const getAllSections = () => sections;

// Export functions to create and fetch sections
module.exports = { createSection, getAllSections };
