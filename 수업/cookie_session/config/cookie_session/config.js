const cookieConfig = {
    httpOnly : true,
    maxAge : 10000,
    //signed : true, 
}

const sessionConfig = { //세션은 기본 30분이 되면 자동만료됨
    secret : "암호화 키",
    resave : false,
    saveUninitialized : true, 
    //cookie : {maxAge : 5000} //5초
}
module.exports = { cookieConfig , sessionConfig }