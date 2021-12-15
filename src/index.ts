import express from "express";
import log from "@ajar/marker";

const { PORT } = process.env ;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("🚀 Hello Express!!!");
});

app.listen(PORT,() => {
  log.magenta(`api is live on`,` ✨ ⚡  http://localhost:${PORT} ✨ ⚡`);  
});