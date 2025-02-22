import express from "express";
import cors from "cors";
import multer from "multer";
// import save_router from "./routers/save_router.js";
// import fetch_router from "./routers/fetch_router.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now();
    cb(null, uniquePrefix + file.fieldname);
  },
});

const upload = multer({ storage: storage });

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.urlencoded({ extended: true })); //plain HTML forms
app.use(express.json());
app.use(cors());

// routes
// app.use("/save", save_router);
// app.use("/fetch", fetch_router);

app.get("/", (req, res) => {
  res.json("Welcome to the server");
});

app.get("/data", (req, res) => {
  res.json({
    name: "Stan",
    password: "password123",
    username: "StanMan",
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.json("I got your information");
});

app.post("/upload", upload.array("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.json("File uploaded successfully");
});

// app.get("/data", (req, res) => {
//   const apiList = {
//     save_routes: ["/save/single", "/save/multiple", "save/dog"],
//     fetch_routes: ["/fetch/single", "/fetch/multiple"],
//   };

//   res.send(apiList);
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// app.use("", (req, res) => {
//   res.send(`No request for ${req.url} exists`);
// });
