import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("png");
  const [convertedFile, setConvertedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setConvertedFile(null);
    setError("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setConvertedFile(null);
      setError("");
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleConvert = async () => {
    if (!file) {
      setError("Please select a file!");
      return;
    }
    setLoading(true);
    setError("");
    const data = new FormData();
    data.append("file", file);
    data.append("format", format);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/files/convert",
        data,
        { responseType: "blob" }
      );
      setConvertedFile(response.data);
    } catch (err) {
      setError("Conversion failed. Please try another file/format.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gradient-bg">
      {/* Glowing background using pure CSS */}
      <div className="background-blur-img"></div>
      <div className="glassmorph-container">
        <div className="folder-icon"></div>
        <h2 className="main-title">Upload files</h2>
        <p className="subtitle">Select and upload the files of your choice</p>
        <form
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`upload-box ${dragActive ? "drag-active" : ""}`}
          onClick={() => document.getElementById("fileInput").click()}
          style={{ cursor: "pointer" }}
        >
          <input
            id="fileInput"
            type="file"
            accept=".jpg,.png,.webp,.avif"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
          <p>{file ? file.name : "Choose a file or drag & drop it here"}</p>
          <span className="hint">
            JPG, PNG, WEBP, AVIF formats supported
          </span>
        </form>

        <div className="conversion-controls">
          <select
            onChange={(e) => setFormat(e.target.value)}
            value={format}
            className="format-dropdown"
          >
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
            <option value="webp">WEBP</option>
            <option value="avif">AVIF</option>
          </select>
          <button
            className="convert-btn"
            onClick={handleConvert}
            disabled={loading || !file}
          >
            {loading ? "Converting..." : "Convert"}
          </button>
        </div>
        {error && <div className="error-msg">{error}</div>}
        {convertedFile && (
          <a
            className="download-btn"
            href={URL.createObjectURL(convertedFile)}
            download={`converted.${format}`}
          >
            Download Converted File
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
