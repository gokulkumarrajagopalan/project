const express = require("express");
const connectToDatabase = require("./Database/database");
const userRoutes = require("./Routes/userRoutes");
const jobPostRoutes = require("./Routes/jobPostRouts");
const signInRoutes = require("./Routes/signInRoutes");
const signOutRoutes = require("./Routes/signOutRoutes");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

// Connect to the database
connectToDatabase();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());

// Enable CORS
const corsConfig = {
  //origin : ["http://localhost:3000"],
  origin: ["https://project-lerz.vercel.app"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsConfig));

// Handle preflight requests
app.options("*", cors(corsConfig));

// Middleware for parsing cookies
app.use(cookieParser());


// JSON parser
//app.use(bodyParser.json());

// Session middleware
app.use(
  session({
    name: "mySessionCookie",
    secret: "MySecureSessionKey$2024#", 
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if using HTTPS
     // httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, 
    },
  }),
);

// Routes
app.use("/users", userRoutes);
app.use("/signIn", signInRoutes);
app.use("/addJobPost", jobPostRoutes);
app.use("/signOut", signOutRoutes);

// Start the server
const PORT = process.env.PORT || 3700;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
