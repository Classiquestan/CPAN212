const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { sampleSize } = require("lodash");

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
const PORT = process.env.PORT || 9000;

// middleware
app.use(express.urlencoded({ extended: true })); //plain HTML forms
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const images = [
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/200/300?grayscale",
];

// routes

app.get("/", (req, res) => {
  res.json("Welcome to the server");
});

app.get("/api/random-images", (req, res) => {
  const randomImages = sampleSize(images, Math.min(3, images.length));
  res.json({ images: randomImages });
});

app.post("/upload", upload.single("dogImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.json({ filename: req.file.filename })
 // res.json("File uploaded successfully");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
