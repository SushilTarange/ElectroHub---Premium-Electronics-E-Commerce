const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully ✅'))
  .catch(err => {
    console.error('MongoDB connection error ❌:');
    if (err.code === 'ECONNREFUSED' && err.syscall === 'querySrv') {
      console.error('DNS Error: Your network may be blocking SRV records. Try using a different DNS (like 8.8.8.8) or use the standard MongoDB connection string.');
    } else if (err.name === 'MongooseServerSelectionError') {
      console.error('IP Whitelist Error: Ensure your current IP is whitelisted in MongoDB Atlas.');
    }
    console.error(err);
  });

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
