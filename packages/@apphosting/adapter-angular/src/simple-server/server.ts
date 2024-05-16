import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oneYear = 31_536_000_000;

app.use(express.static(path.join(__dirname, "..", "browser"), { maxAge: oneYear }));
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "browser", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
