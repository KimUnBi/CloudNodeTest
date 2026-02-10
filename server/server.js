const express = require("express");
const app = express();

const indexRouter = require("./routes/index");
const path = require("path");

// cors
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// React build 정적 파일 서빙
app.use(express.static(path.join(__dirname, "../client/dist")));

// API 라우터
app.use("/", indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`${port}번 포트에서 대기 중...`);
});