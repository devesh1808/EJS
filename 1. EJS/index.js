import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();
  if (day == 0 || day == 6) res.send("It's a weekend, let's have some fun");
  res.send("It's a weekday, let's work hard");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
