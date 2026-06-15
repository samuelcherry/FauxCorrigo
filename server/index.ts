import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

let ticketCounts = {
  low: 0,
  medium: 0,
  high: 0,
  urgent: 0,
};

app.get("/tickets", (req, res) => {
  res.json(ticketCounts);
});

app.post("/tickets", (req, res) => {
  ticketCounts = req.body;

  res.json({
    success: true,
    data: ticketCounts,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
