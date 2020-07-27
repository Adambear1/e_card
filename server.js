const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"));
// Passport Init

// DB Connect
require("./config/db")();
// MW
app.use(require("morgan")("combined"));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
// Server Routes
require("./routes/oauthRoutes")(app);
require("./routes/html-routes")(app);
// API Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/user", require("./routes/api/user"));
// axios
require("axios");

app.listen(PORT, () => {
  console.log("Listening on PORT  " + PORT);
});