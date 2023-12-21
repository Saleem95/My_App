// const express = require('express')
// const app = express()
// const bodyparser = require('body-parser')
// const port = 5500
// const mongoose = require('mongoose');

// const login = require("./Routers/Router.js")


// // Middleware to handle CORS
// // app.use((req, res, next) => {
// //     res.header('Access-Control-Allow-Origin', '*')
// //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
// //     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
// //     next()
// // })

// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({ extended: true }))


// // Databse connection

// mongoose.connect('mongodb://localhost/your_database_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });



// ////
// app.get('/',()=>{
//     console.log("Hi User");
// });
// app.use('/api/login', login)

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./Database/Db'); // Import your MongoDB connection
const routes = require('./Routers/router'); // Import your CRUD routes

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.get('/',()=>{
    console.log("Hi User");
})
app.use('/api', routes); // Mount your routes under '/api' prefix

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});











// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const User = require('./models/user'); // Define the User model

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/your_database_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.post('/generate-otp', async (req, res) => {
//   const { phoneNumber } = req.body;
  
//   // Generate and send OTP to the user's phone number (e.g., via SMS)
//   const otp = Math.floor(1000 + Math.random() * 9000).toString();

//   // Store the OTP in the database
//   const user = await User.findOne({ phoneNumber });
//   if (user) {
//     user.otp = otp;
//     await user.save();
//   } else {
//     await new User({ phoneNumber, otp }).save();
//   }

//   res.status(200).json({ message: 'OTP sent' });
// });

// app.post('/verify-otp', async (req, res) => {
//   const { phoneNumber, otp } = req.body;
  
//   // Check if the entered OTP matches the stored OTP in the database
//   const user = await User.findOne({ phoneNumber });
//   if (user && user.otp === otp) {
//     res.status(200).json({ message: 'OTP verified successfully' });
//   } else {
//     res.status(400).json({ error: 'Invalid OTP' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

