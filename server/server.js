const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
app.use(helmet());
const port = process.env.PORT || 9000;

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(bodyParser.json({ limit: "2mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "2mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const userRoutes = require("./routes/userRoutes");
const enemyRoutes = require("./routes/enemyRoutes");

app.use("/users", userRoutes);
app.use("/enemies", enemyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
