const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // You can use any port you prefer

// Serve static files (including videos) from the current directory
app.use(express.static(__dirname));

// Endpoint to get videos
app.get('/api/videos/:videoName', (req, res) => {
    const videoName = req.params.videoName;
    const videoPath = path.join(__dirname, videoName);

    // Set the appropriate content type for MP4 files
    res.setHeader('Content-Type', 'video/mp4');

    // Send the video file in the response
    res.sendFile(videoPath);
});

// Start the server
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});
