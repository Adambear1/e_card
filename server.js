const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static("./public"));

require("./routes/oauthRoutes")(app);
require("./routes/serverRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log("Listening on PORT  " + PORT);
});
