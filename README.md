# Universal File Converter

A modern, web-based Universal File Converter that allows users to upload image files and convert them instantly to a chosen format with a beautiful glassmorphism-themed UI. Built with React and Node.js, featuring a fast and expandable backend powered by Sharp for image processing.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features (MVP)](#features-mvp)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation and Setup](#installation-and-setup)  
- [Usage](#usage)  
- [Future Enhancements](#future-enhancements)  
- [Showcase](#showcase)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

The **Universal File Converter** is a real-world utility application designed to simplify file format conversions, initially focusing on common image formats such as JPG, PNG, WEBP, and AVIF. Users can upload an image, select the desired output format, and download the converted file instantly. The project showcases key web development skills including backend file processing, API design, and responsive UI/UX with a modern themed interface.

---

## Features (MVP)

- **File Upload:** Support for `.jpg`, `.png`, `.webp`, `.avif` image formats  
- **File Conversion:** Convert images to selected formats with high quality using Sharp  
- **Download Converted File:** Instantly download the processed converted image  
- **Responsive Glassmorphism UI:** Modern dark theme with centered card, pure CSS folder icon, and a glowing blur background  
- **Drag and Drop:** Intuitive drag & drop file upload with visual drag state indicator  
- **Error Handling:** Clear error feedback for unsupported formats or failed conversions  

---

## Tech Stack

| Layer          | Technology                                                            |
|----------------|----------------------------------------------------------------------|
| **Frontend**   | React.js with Vite (modern ultra-fast build tool)                    |
| **Backend**    | Node.js, Express.js                                                  |
| **File Upload**| Multer middleware for handling multipart file uploads              |
| **Image Processing** | Sharp - high-performance image processing                         |
| **API Communication** | Axios for frontend-backend REST API requests                      |
| **Styling**    | CSS with glassmorphism effects and responsive media queries          |

---

## Project Structure

```
universal-converter/
├── client/                  # React frontend
│   ├── src/
│   │   ├── App.jsx          # Main React component and UI logic
│   │   └── App.css          # Styles for glassmorphism theme and responsiveness
│   ├── public/
│   │   └── ...              # Static assets (e.g., favicon, fonts if any)
│   └── package.json         # Frontend dependencies and scripts
├── server/                  # Express backend
│   ├── controllers/
│   │   └── convertController.js   # File conversion logic using Sharp
│   ├── routes/
│   │   └── files.js                 # API routes for file upload and conversion
│   ├── uploads/              # Temporary uploaded file storage
│   ├── index.js              # Express server setup and middleware
│   └── package.json          # Backend dependencies and scripts
└── README.md                 # Project documentation
```

---

## Installation and Setup

### Prerequisites

- Node.js (v16 or newer recommended)  
- npm or yarn package manager  

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server (default port 5000):
   ```
   npm run dev
   ```

### Frontend Setup

1. Open a new terminal and navigate to the client directory:
   ```
   cd client
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React development server (default port 5173):
   ```
   npm run dev
   ```

4. Open your browser at `http://localhost:5173` to access the app.

---

## Usage

- Upload an image file (`.jpg`, `.png`, `.webp`, `.avif`) via drag-and-drop or file selector  
- Select the desired output format from the dropdown (`JPG`, `PNG`, `WEBP`, `AVIF`)  
- Click **Convert** to upload and convert the file on the backend  
- When conversion completes, a download link will appear — click to save your converted image locally  
- If any issues occur, clear error messages guide you accordingly  

---

## Future Enhancements

- **Batch Processing:** Convert multiple files simultaneously  
- **Audio/Video Conversion:** Support formats such as `.mp3` ↔ `.wav`, `.mp4` ↔ `.webm`  
- **Document Conversion:** Support `.docx` ↔ `.pdf` file conversions  
- **Compression Level Selection:** Allow users to adjust quality/compression settings  
- **Dark/Light Mode Toggle:** User option to switch themes  
- **Conversion Preview:** Show before/after image preview inside the app  
- **Authentication:** Add user accounts and history of conversions  

---

## Showcase

- The sleek glassmorphism UI with pure CSS folder icon and glowing background effectively demonstrates modern frontend design  
- The backend uses `sharp` for efficient, high-quality image processing  
- Drag & drop and responsive layout enhance user experience across devices  
- Easily deployable on platforms like Vercel (frontend) and Render or Heroku (backend) for live demos  

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

When contributing:  
- Follow the coding style and directory organization  
- Test new functionalities locally before submitting  
- Provide clear commit messages and documentation updates  

---

## Author 💻
Made with love by [Harsha Verma](https://github.com/vermaharsha)
