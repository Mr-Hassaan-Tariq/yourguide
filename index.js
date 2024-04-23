var http = require("http");
const express = require("express");
const app = express();
var http = require("http").Server(app);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());


const userRoute = require("./routes/users.routes");
const articleRoute = require("./routes/articles.routes");
const experienceRoutes = require("./routes/experience.routes");
const cityRoutes = require("./routes/city.routes");
const dashboard = require("./routes/dashboard.routes");
const otpRoutes = require("./routes/otp.routes");
const serviceRoutes = require("./routes/services.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const paymentRoutes = require("./routes/payement.routes");
const contactRoutes = require("./routes/contact.routes");

const UserModel = require("./Models/UserModel");
const OtpModal = require("./Models/OTPModel");
const city = require("./Models/CityModel");
const {
  services,
  servicesInclude,
  servicesExclude,
} = require("./Models/ServicesModel");
const { Article, ArticleDetail } = require("./Models/ArticleModel");
const {
  Experience,
  ExperienceDetail,
  experienceDay,
  Images,
} = require("./Models/ExperienceModel");
const Host = require("./Models/HostModel");
const Payment = require("./Models/PaymentModel");
const ContactModel = require("./Models/ContactModel");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/cities", cityRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/article", articleRoute);
app.use("/api/dashboard", dashboard);
app.use("/api/otp", otpRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/contact", contactRoutes);



// Define a route that returns the uploaded file
app.get("/v1/file/:filename", (req, res) => {
  const filename = req.params.filename;
  console.log("here ");
  res.sendFile(__dirname + "/uploads/" + filename);
});
// Define a route that returns the uploaded file
app.get("/v1/file/:folder/:filename", (req, res) => {
  const { folder, filename } = req.params;
  res.sendFile(__dirname + "/uploads/" + folder + "/" + filename);
});

// Payment.sync({
//         alter: false,
//         force: false
//     });
// UserModel.sync({
//     alter: false,
//     force: false
// });
// Host.sync({
//     alter:true,
//     force:true
// })

// services.sync({
//     alter:true,
//     force:false
// })
// servicesInclude.sync({
//     alter:true,
//     force:false
// })
// servicesExclude.sync({
//     alter:true,
//     force:true
// })

// Article.sync({
//     alter: true,
//     force: false
// })
// ArticleDetail.sync({
//     alter: true,
//     force: false
// })

// Experience.sync({
//     alter:true,
//     force:false
// })
// ExperienceDetail.sync({
//     alter:true,
//     force:false
// })
// experienceDay.sync({
//         alter: true,
//         force: false
//     })

// Images.sync({
//     alter:true,
//     force:true
// })
// ContactModel.sync({
//   alter:false,
//   force:true
// })
// city.sync({
//     alter: false,
//     force: false
// })

// OtpModal.sync({
//     alter:false,
//     force:false
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
