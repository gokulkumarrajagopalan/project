const express = require("express");
const connectToDatabase = require("./Database/database");
const userRoutes = require("./Routes/userRoutes");
const jobPostRoutes = require("./Routes/jobPostRouts");
const signInRoutes = require("./Routes/signInRoutes");
const signOutRoutes = require("./Routes/signOutRoutes");
const documentRoutes = require("./Routes/documentRoutes");
const addProfile = require("./Routes/ProfileRoutes");
const wordtopdf = require("./Routes/wordtopdf");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const MasterAddJobRoles = require("./Routes/MasterAddJobRoles");
const PaymentRoutes = require("./Routes/PaymentRoutes");
// const telegramAPIRoutes = require("./Routes/TelegramAPIRoutes");

const app = express();

// Database connection
connectToDatabase();

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

// CORS configuration
const allowedOrigins = ['https://gdest.in', 'https://server.gdest.in'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // Block the request
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    credentials: true, // Allow credentials (cookies, headers)
  })
);

// Session configuration
app.use(
  session({
    name: "GdestCookies",
    secret: "MySecureSessionKey$2024#",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://codegarbages:2nj6YXZ2WcuRmYWW@cluster-name.qmmazxc.mongodb.net/CodeGarbagesServer",
      ttl: 14 * 24 * 60 * 60, // 14 days
      autoRemove: "native",
    }),
    cookie: {
      secure: true, // Ensures cookies are sent over HTTPS only
      httpOnly: true, // Prevents JavaScript access to cookies
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      sameSite: "none", // Supports cross-site requests
    },
  })
);

// Routes
app.use("/users", userRoutes);
app.use("/signIn", signInRoutes);
app.use("/addJobPost", jobPostRoutes);
app.use("/signOut", signOutRoutes);
app.use("/documents", documentRoutes);
app.use("/addProfile", addProfile);
app.use("/wordtopdf", wordtopdf);
app.use("/masterAddJobRoles", MasterAddJobRoles);
app.use("/PaymentRoutes", PaymentRoutes);
// app.use("/", telegramAPIRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Server setup
const PORT = process.env.PORT || 3710;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
