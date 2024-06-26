const config = require("../../../config/cookie_session/config");
const db = require("../../db/session_mem");

const cookieConfig = config.cookieConfig;

const index = (req, res) =>{
    //const userCookie = req.cookies.myCookie;
    const userCookie = req.signedCookies.myCookie;
    res.cookie("myCookie", "valueCookie", cookieConfig);
    res.render("cookie/cookie01", {userCookie} );
}
const popup = (req, res) =>{
    res.render("cookie/popup");
}
const cookie02 = (req, res) =>{
    const userCookie = req.cookies.myCookie;
    res.render("cookie/cookie02", {userCookie} );
}
const popup02 = (req, res) =>{
    res.render("cookie/popup02");
}

const makeCookie = (req, res) =>{
    res.cookie("myCookie", "value", cookieConfig );
    //res.render("cookie/popup02");
    res.send("<script> window.close() </script>");
}

const ser = require("../../service/cookie/cookie_service");

const cart = (req, res) => {
    console.log
    if(req.session.username){
    res.render("cookie/cart", {list : ser.cart() });
    }else{
        res.redirect("/session/login")
    }
}
const save = (req, res) => {
    const goods_id = req.params.goods;
    let cart_list = req.cookies.cart_list;
    //let cart_list = req.signedCookies.cart_list;
    if(cart_list === undefined){
        //cart_list = {}
        cart_list = []
    }
    cart_list = ser.save( cart_list, goods_id );
    res.cookie("cart_list", cart_list, cookieConfig );

    const msg = `<script>
        alert("${goods_id} 상품이 장바구니에 등록 되었음~!!!");
        location.href="/cookie/cart";
    </script>`;
    res.send( msg );
}
const viewList = (req, res) => {
    let cart_list = req.cookies.cart_list;
    if( !cart_list ){ // cart_list === undefined
        const msg = `<script>
            alert("저장된 목록이 없습니다");
            location.href = "/cookie/cart";
        </script>`;
        res.send( msg );
    }
    res.render("cookie/view_list", {list : cart_list} );
}

/*
const list_loginchk = (req,res) => {
    for(let i=0 ; i < db.length ; i++){
    if(db[i].id === req.body.id && db[i].pwd === req.body['pwd']){
        //req.session.username = DBId;
        //req.session.nick = DBNick;
        res.redirect("/session/success");
    }else{
    let msg = scriptMsg("로그인 먼저", "/session/login")
    res.send(msg);
    }
}
}
*/

module.exports = { viewList , save , cart , 
    makeCookie, index , popup , cookie02 , popup02};