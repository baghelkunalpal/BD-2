const Todo = require("../models/Todo");

// Define the route handling
exports.createTodo = async (req, res) => {
    try {
        // Extract the title and description from request body
        const { title, description } = req.body;
        
        // Create a new todo object and insert it into the database
        const response = await Todo.create({ title, description });

        res.status(201).json({
            success: true,
            data: response,
            message: 'Entry Created Successfully in the database!!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: 'Internal server error',
            message: error.message,
        });
    }
};
