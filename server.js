const express = require('express'); 
const cors = require('cors');
const connectDB = require('./config/pdb');
const proutes = require('./routes/proutes');
const Product = require('./model/products');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send("API running...");
});

// GET all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();  
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// GET product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);   
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

app.use('/api/products', proutes);

app.listen(5000, () =>
    console.log("Server started on port 5000")
);
