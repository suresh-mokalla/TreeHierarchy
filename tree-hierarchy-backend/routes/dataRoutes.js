// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const TreeData = require('../models/TreeData');

// GET route to fetch all data
router.get('/', async (req, res) => {
    try {
        const data = await TreeData.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT route to update data by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedData = await TreeData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
