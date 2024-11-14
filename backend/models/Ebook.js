// Removed mongoose and database schema

// Dummy in-memory data storage for eBooks
let ebooks = [];

const createEbook = (name, content, authors, section, dateIssued, returnDate, issuedTo) => {
    // Create a new eBook object
    const newEbook = {
        name,
        content,
        authors,
        section,
        dateIssued,
        returnDate,
        issuedTo
    };

    // Save the ebook in memory (you can change this to another storage method if needed)
    ebooks.push(newEbook);
    console.log('Ebook created:', newEbook);
};

const getAllEbooks = () => {
    return ebooks;
};

const getEbookById = (id) => {
    return ebooks.find(ebook => ebook.id === id);
};

module.exports = { createEbook, getAllEbooks, getEbookById };
