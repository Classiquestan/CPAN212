import { useState } from "react";
import "./App.css";

function App() {
  const [randomImages, setRandomImages] = useState([]);
  const [dogImage, setDogImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const fetchRandomImages = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/random-images");
      const data = await response.json();
      setRandomImages(data.images);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (selectedFile) {
      formData.append("dogImage", selectedFile);
    } else {
      console.error("No file selected.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/upload", {
        method: "POST",
        body: formData,
        //    headers: { "Content-Type": "application/json" },
        //    body: JSON.stringify(dogImage),
      });
      const data = await response.json();
      setUploadedImageUrl(`http://localhost:9000/uploads/${data.filename}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="header">Random Image Gallery</h1>
      {/* {randomImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Random ${index}`}
            width="300"
            height="200"
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          />
        ))} */}

      <div
        className="container1"
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   gap: "10px",
        //   marginBottom: "30px",
        // }}
      >
        {randomImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Random ${index}`}
            className="image-style"
          />
        ))}
        <button className="buttons" onClick={fetchRandomImages}>
          Get Images
        </button>
      </div>

      <h2 className="header">Random Dog Image</h2>
      <div className="container2">
        {dogImage && <img className="image-style" src={dogImage} alt="Dog" />}
        <button className="buttons" onClick={fetchRandomDogImage}>
          Get Random Dog Images
        </button>
      </div>

      <h2 className="header">Upload Dog Image</h2>
      <form onSubmit={handleImageUpload}>
        <input type="file" name="dogImage" onChange={handleFileChange} />
        <button className="buttons" type="submit">
          Upload
        </button>
      </form>
      {uploadedImageUrl && (
        <div>
          <h2 className="header">Uploaded Dog Image:</h2>
          <img
            className="image-style"
            src={uploadedImageUrl}
            alt="Uploaded Dog"
          />
          {/* <img src="/uploads/your_uploaded_image.jpg" alt="Uploaded Dog" /> */}
          {/* <pre>{JSON.stringify(message, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
}

export default App;
