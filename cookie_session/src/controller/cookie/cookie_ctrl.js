const config = require("../../../config/cookie_session/config")
const ser = require("../../service/cookie/cookie_service");

const cookieConfig = config.cookieConfig;

const index = (req,res) => {
    //const userCookie = req.cookies.myCookie;
    const userCookie = req.signedCookies.myCookie;
    //암호화 했을때는 signedCookies (전부 바꿔줘야함)
    
    res.cookie("myCookie", "valueCookie", cookieConfig)
    res.render("cookie/cookie01", {userCookie});
}

const popup = (req,res) => {
    res.render("cookie/popup");
}

const cookie02 = (req,res) => {
    const userCookie = req.cookies.myCookie;
    res.render("cookie/cookie02", {userCookie});
}

const popup02 = (req,res) => {
    res.render("cookie/popup02");
}

const makeCookie = (req,res) => {
    res.cookie("myCookie", "value", cookieConfig)
    //res.render("cookie/makeCookie"); //send, render를 안쓰면 종료가 안됨
    res.send("<script> window,close() </script>")
}

const cart = (req,res) => {
    res.render("cookie/cart", {list : ser.cart()});
}

const save = (req,res) => {
    const goods_id = req.params.goods;
    //링크타고 넘어가는 경로는 params 이용
    
    //let cart_list = req.signedCookies.cart_list;
    let cart_list = req.cookies.cart_list;
    if(cart_list === undefined){
        //cart_list = {}
        cart_list = []
    }
    cart_list = ser.save(cart_list, goods_id);
    res.cookie("cart_list", cart_list, cookieConfig);

    const msg = `<script>
        alert("${goods_id} 장바구니에 등록 완료");
        location.href="/cookie/cart";
        </script>`;
    
    //let list = ser.cart_list(cart_list);
    //res.render("cookie/view_list", {list});
    res.send(msg)
}

const viewList = (req,res) => {
    let cart_list = req.cookies.cart_list;
    if(!cart_list){
        //cart_list === undefined랑 같은 조건문
        const msg = `<script>
        alert("저장목록이 없음");
        location.href = "/cookie/cart";
        </script>`;
        res.send(msg)
    }
    res.render("cookie/view_list", {list : cart_list});
    
}


module.exports={index, popup, cookie02, popup02,
    makeCookie, cart, save, viewList};