import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("png");
  const [convertedFile, setConvertedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setConvertedFile(null);
    setError("");
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
    <div style={{ maxWidth: 400, margin: "3rem auto", padding: 24, background: "#23272f", borderRadius: 12, color: "#fff" }}>
      <h2>Universal File Converter</h2>
      <input type="file" accept=".jpg,.png,.webp,.avif" onChange={handleUpload} />
      <div style={{ margin: "1rem 0" }}>
        <label>
          Convert to:&nbsp;
          <select onChange={e => setFormat(e.target.value)} value={format}>
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
            <option value="webp">WEBP</option>
            <option value="avif">AVIF</option>
          </select>
        </label>
      </div>
      <button onClick={handleConvert} disabled={loading} style={{ padding: "0.5rem 1.25rem" }}>
        {loading ? "Converting..." : "Convert"}
      </button>
      {error && <div style={{ color: "tomato", marginTop: 10 }}>{error}</div>}
      {convertedFile &&
        <div style={{ marginTop: 20 }}>
          <a
            href={URL.createObjectURL(convertedFile)}
            download={`converted.${format}`}
            style={{ color: "#61dafb", fontWeight: "bold" }}
          >
            Download Converted File
          </a>
        </div>
      }
    </div>
  );
}

export default App;
