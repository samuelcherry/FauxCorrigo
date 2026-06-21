import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

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
  const { low, medium, high, urgent } = req.body;

  ticketCounts = {
    low: Number(low) || 0,
    medium: Number(medium) || 0,
    high: Number(high) || 0,
    urgent: Number(urgent) || 0,
  };

  res.json({
    success: true,
    data: ticketCounts,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
