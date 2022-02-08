require('dotenv').config()
const express = require("express");
const connectDB = require('./config/db');
const productRoutes = require('./routes/productsRoutes');





connectDB();


const app = express();

app.use(express.json());
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 4000;





app.listen(PORT, () => console.log(`server running on port ${PORT}`));