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

// Session configuration
app.use(
  session({
    name: "GdestCookies",
    secret: "MySecureSessionKey$2024#",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://codegarbages:2nj6YXZ2WcuRmYWW@cluster-name.qmmazxc.mongodb.net/CodeGarbagesServer",
      ttl: 14 * 24 * 60 * 60, 
      autoRemove: "native",
    }),
    cookie: {
      secure: false,
      httpOnly: false, 
      maxAge: 30 * 24 * 60 * 60 * 1000, 
      sameSite: "lax",
    },
  })
);

// CORS configuration
const allowedOrigins = ['https://gdest.in'];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

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
app.use("/", telegramAPIRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Server setup
const PORT = process.env.PORT || 3710;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
