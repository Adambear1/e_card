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
app.use(require("passport").initialize());
app.use(require("passport").session());

require("passport").serializeUser((user, done) => {
  done(null, user);
});
require("passport").deserializeUser((user, done) => {
  done(null, user);
});
app.use(
  require("express-session")({
    secret: "eCard",
    resave: true,
    saveUninitialized: true,
  })
);
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
// Routes
require("./routes/oauthRoutes")(app);
require("./routes/serverRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log("Listening on PORT  " + PORT);
});
