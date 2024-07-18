const express = require("express");
const connectToDatabase = require("./Database/database");
const userRoutes = require("./Routes/userRoutes");
const jobPostRoutes = require("./Routes/jobPostRouts");
const signInRoutes = require("./Routes/signInRoutes");
const signOutRoutes = require("./Routes/signOutRoutes");
const documentRoutes = require("./Routes/documentRoutes");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

connectToDatabase();

app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.json());

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
      maxAge: 3600 * 1000,
      sameSite: "lax",
    },
  })
);

const corsConfig = {
  origin: ["https://gdest.in"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsConfig));

app.options("*", cors(corsConfig));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://3000-idx-project-1720162691714.cluster-3g4scxt2njdd6uovkqyfcabgo6.cloudworkstations.dev");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use("/users", userRoutes);
app.use("/signIn", signInRoutes);
app.use("/addJobPost", jobPostRoutes);
app.use("/signOut", signOutRoutes);
app.use('/documents', documentRoutes); 

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3700;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
