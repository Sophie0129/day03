const cookieConfig = {
    httpOnly : true,
    maxAge : 10000,
    //signed : true, 
}

const sessionConfig = {
    secret : "암호화 키",
    resave : false,
    saveUninitialized : true, 
}
module.exports = { cookieConfig , sessionConfig }