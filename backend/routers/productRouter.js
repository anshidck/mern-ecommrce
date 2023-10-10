const express = require('express');
const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()


// Create a new vehicle
router.post('/', asyncHandler(async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json(error);
    }
}));

router.get('/fetch', asyncHandler(async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}))

router.get('/', protect, asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { category: { $regex: req.query.search, $options: "i" } },
                { brand: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    const products = await Product.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(products);
}));

// Define the route to get a vehicle by its ID
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        try {
            const product = await Product.findById(id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ message: 'item not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(400).json({ message: 'Invalid product ID' });
    }
}));

// Update a vehicle by ID
router.put('/:productId', asyncHandler(async (req, res) => {
    try {
        const { productId } = req.params;
        const updatedVehicleData = req.body; // Updated vehicle data from the request body

        // Check if the vehicle with the given ID exists
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'item not found' });
        }

        // Update the vehicle information
        Object.assign(product, updatedVehicleData);

        // Save the updated vehicle to the database
        await product.save();

        res.json(product); // Return the updated vehicle as a response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));


// Delete a vehicle by ID
router.delete('/:productId', asyncHandler(async (req, res) => {
    try {
        const { productId } = req.params;

        // Check if the vehicle with the given ID exists
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }

        // Delete the vehicle from the database
        await Product.findByIdAndDelete(productId);

        res.status(204).json(); // No content response for successful deletion
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));


module.exports = router;