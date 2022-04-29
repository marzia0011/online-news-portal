const express = require("express");
const cors = require("cors");
const categoryRoute = require("./routes/categoryRoute");
const articleRoute = require("./routes/articleRoute");
const videoRoute = require("./routes/videoRoute");
const userRoute = require("./routes/userRoute");
const surveyRoute = require("./routes/surveyRoute");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/articles", articleRoute);
app.use("/api/v1/videos", videoRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/survey", surveyRoute);

app.listen(5000, () => {
    console.log("Server created successfully");
});
