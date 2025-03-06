import express from "express";
import { add } from "./stringCalculator";

const app = express();
app.use(express.json());

app.post("/add", (req, res) => {
  try {
    const result = add(req.body.numbers);
    res.json({ result });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Unknown error" });
    }
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
