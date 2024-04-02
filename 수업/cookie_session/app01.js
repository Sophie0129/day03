const express = require("express");
const cookieRouter = require("./src/routes/cookie/cookie_router");
const cookieParser = require("cookie-parser");


const config = require("./config/cookie_session/config")
const sessionRouter = require("./src/routes/session/session_router");
const session = require("express-session");
const bodyParser = require("body-parser")

const fileStore = require("session-file-store")(session);
//const sessionConfig = require("./session");
config.sessionConfig.store = new fileStore();


const app = express();
app.set("views","./src/view");
app.set("view engine", "ejs");

//app.use( cookieParser("아무값이나키로설정") );
app.use( cookieParser() );
app.use( session( config.sessionConfig ) )//위에 있어야...먼저 설정하고 들어간다?
app.use("/cookie", cookieRouter);
app.use(bodyParser.urlencoded({extended : false}));
//라우터보다 위에 있어야 기능
app.use("/session", sessionRouter );

app.listen( 3000, ()=>{console.log("3000 servie ")} )