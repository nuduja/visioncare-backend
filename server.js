require ('dotenv').config();

const express = require('express');

const cors = require("cors")
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

const ConnectDB = require('./connectDB');

//express app
const app = express();

app.use(cors())

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

ConnectDB();

//listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening for requests on port', process.env.PORT);
});

app.get('/', (req, res) => {
  res.send("<h1>Hello world</h1>");
});