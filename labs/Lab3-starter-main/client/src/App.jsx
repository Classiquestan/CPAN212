import { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleButton = async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginForm = { username, password };

    try {
      const response = await fetch("http://localhost:8000/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setMessage(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <button className="button" onClick={handleButton}>
        Click Me
      </button>

      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type="submit">
          Login
        </button>
      </form>

      <div className="fileup">
        <h2>File Upload</h2>
        <form onSubmit={handleFileUpload}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button className="button" type="submit">
            Upload File
          </button>
        </form>
      </div>

      {message && (
        <div>
          <h3>Server Response:</h3>
          <pre>{JSON.stringify(message, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
