const express = require("express");
const connectToDatabase = require("./Database/database");
const userRoutes = require("./Routes/userRoutes");
const signInRoutes = require("./Routes/signInRoutes");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

// Connect to the database
connectToDatabase();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors(
  {
    origin :  ["http://localhost:3000"],
    methods : ["POST" , "GET"],
    credentials : true
  }
));

// Middleware for parsing cookies
app.use(cookieParser());


//json parser

app.use(bodyParser.json());

// Session middleware
app.use(session({
  secret: "MySecureSessionKey$2024#", // Use your own secret key here
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    //httpOnly: true,
    maxAge: 3600 * 1000
  }
}));

// Routes
app.use("/users", userRoutes);
app.use("/signIn", signInRoutes);

// Start the server
const PORT = process.env.PORT || 3700;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
