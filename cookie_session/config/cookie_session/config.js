

const cookieConfig = {
    httpOnly : true, //웹통신에서 적용하겠다는 의미
    macAge : 5000, // 5초
    //signed : true, //쿠키를 암호화 한다(기준이 될 키값이 필요하다)

}

const sessionConfig = {
    secret : "암호화 키",
    resave : false, //세션의 내용이 변경되면 새로운 세션을 만든다. true는 바뀌던말던 계속 새 세션을 만듬
    saveUninitialized : true // 위의 해당하는 세션의 내용을 저장
    //true는 바뀔때만 저장, false는 무조건 계속 저장
}

module.exports = {cookieConfig, sessionConfig}