import express from "express";

type Data = {
  [key: string]: string;
};

const { diseases } = require("./data");
const app: express.Application = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/disease", (req: express.Request, res: express.Response) => {
  /*const disease = diseases.filter((data: Data) => {
    return data.name === req.body.disease;
  });
  res.send(disease);*/
  const bodyArr = diseases[req.body.body];
  const disease = bodyArr.filter((data: Data) => {
    return data.name === req.body.disease;
  });
  res.send(disease);
});

app.listen(port, () => {
  console.log(`서버 ${port}가 열렸습니다.`);
});
