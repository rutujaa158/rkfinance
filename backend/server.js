
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Keep the old root endpoint as an API test
app.get("/api", (req, res) => {
  res.send("R K Finance Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
