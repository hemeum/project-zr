import express from "express";

const { diseases } = require("./data");
const app: express.Application = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(diseases);
});

app.listen(port, () => {
  console.log(`서버 ${port}가 열렸습니다.`);
});
