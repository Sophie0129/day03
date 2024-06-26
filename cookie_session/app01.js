const express = require("express");
const cookieRouter = require("./src/routes/cookie/cookie_router")
const cookieParser = require("cookie-parser")

const config = require("./config/cookie_session/config")
const sessionRouter = require("./src/routes/session/session_router")
const session = require("express-session");


const app = express();
app.set("views", "./src/view");
app.set("view engine", "ejs");

//app.use(cookieParser("아무값이나키로설정"));//라우터보다 위에 적어야 기능함
app.use(cookieParser());
app.use("/cookie", cookieRouter);
app.use(session(config.sessionConfig)) //이 값으로 세션을 만든다
app.use("/session", sessionRouter);

app.listen(3000, ()=>{console.log("3000 service")})