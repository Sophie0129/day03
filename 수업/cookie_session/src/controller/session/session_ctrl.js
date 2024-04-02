const db = require("../../db/session_mem");


const index = (req, res) => {
    res.render("session/index");
}

//var 김개똥;
const setSession = (req, res) => {
    console.log("셋 세션");
    req.session.name = "홍길동"; //세션의 키(네임)을 홍길동으로 만든다
    req.session.age = 20;
    res.render("session/set_session")
    //전역변수 김개똥은 한번만 사용, 지역변수 홍길동은 사용자임의로 바꿀 수 있음
}

const getSession = (req, res) => {
    const sessionValue = {
        name : req.session.name,
        age : req.session.age}
    res.render("session/get_session", sessionValue)
}

const delSession = (req,res) => {
    //delete req.session.name; //하나의 세션을 삭제
    req.session.destroy(); //모든 세션을 삭제시킴 디스트로이

    res.render("session/del_session")
}


const login = (req,res) => {
    res.render("session/login", {username : req.session.username})
}

const loginCheck = (req,res) => {
    console.log(req.body) //포스트방식은 바디로 처리
    console.log(req.body.id)
    console.log(req.body['pwd'])

    let msg = "";
    //const DBId = "aaa", DBPwd = "aaa", DBNick = "홍길동";
    //if(DBId === req.body.id && DBPwd === req.body['pwd']){
        for(let i=0 ; i < db.length ; i++){
            if(db[i].id === req.body.id && db[i].pwd === req.body['pwd']){
                //req.session.username = DBId;
                //req.session.nick = DBNick;
               //res.redirect("/session/success");
                msg = scriptMsg("로그인 성공", "/session/success")

            }else{
                msg = scriptMsg("로그인 실패", "/session/login")
            } res.send(msg);
            }
        }
       /* req.session.save(()=>{
            res.redirect("/session/success");
        })
    }else {
    let msg = scriptMsg("로그인 실패", "/session/login")
    `<script>
    alert("로그인 실패");
    location.href="/session/login";
    </script>`;}
    res.send(msg);*/
//res(리스폰)이 2개면 오류가 날 수도 있다.
//앞에 return이나 else를 붙여 하나만 실행되도록 한다

const scriptMsg=(sMsg,sUrl)=>{
   return `<script>
    alert("${sMsg}");
    location.href="${sUrl}";
    </script>`;
}

const success = (req,res) =>{
    if(req.session.username)
        return res.render("session/success", 
            {nick : req.session.nick})
    let msg =scriptMsg("로그인 먼저", "/session/login")
    /*
    `<script>
    alert("로그인 먼저 하세요");
    location.href="/session/login";
    </script>`;*/
    res.send(msg);
}

const logout = (req,res) => {
    req.session.destroy(() => {
        console.log("모든 세션을 만료합니다");
    } );
    res.redirect("/session/login")
}


const cart_loginchk = (req,res) => {
    const member = db.filter(
        (mem) => mem.id === req.body.id 
            && mem.pwd === req.body['pwd']);
            console.log("member : ", member)
            if(member.length != 0){
                req.session.username = member.id;
                req.session.nick = member.nick;
                req.session.save( () => {
                    res.redirect("/session/success")
                })
            }else{
                msg = scriptMsg("로그인 실패", "/session/login")
                res.send(msg)
            }

}



    /*
    for(let i=0 ; i < db.length ; i++){
    if(db[i].id === req.body.id && db[i].pwd === req.body['pwd']){
       res.redirect("/session/success");
    }else{
    let msg = scriptMsg("로그인 먼저", "/session/login")
    res.send(msg);
    }
}
}
*/



module.exports = { success, index, 
    setSession, getSession, delSession,
    login, loginCheck, logout, cart_loginchk };