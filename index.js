import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("APAX Webhook received:", req.body);
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("APAX Webhook Running ✔️");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
