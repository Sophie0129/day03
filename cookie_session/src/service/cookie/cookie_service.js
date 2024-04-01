const db = require("../../db/user_cart");
const ctrl = require("../../controller/cookie/cookie_ctrl")

const cart = () => {
    return db;
    console.log("서비스 디비 리턴 완")
}
const save = (cart_list, id) =>{
    let bool = true;

    for(let i=0 ; i < db.length ; i++){
        if(cart_list.goods_id == db[i].goods_id){
            db[i].amt += 1;
            db[i].total += cart_list.price;
            bool = false;
        }else{
            console.log("선택 쿠키 저장 안됨")
            //alert("상품이 등록되지 않았습니다.")
        }   
    }
    //res.render("cookie/view_list", {list : db.cart});
    //return db.cart;
    
    
    /*
    for(let i=0; i < cart_list.length ; i++){
        if(cart_list[i].goods_id == id){
            cart_list[i].number++;
            cart_list[i].total += cart_list[i].price;
            bool = false;
            break;
        }
        */
       
       if(true){
           //select * from goods where goods_id = id;
           for(let i =0; i<db.length;i++) {
               if(db[i].goods_id == id){
                   cart_list = db[i];
                   //cart_list.push(db[i])
                   //var endLength = cart_list.length - 1;
                   //cart_list[endLength].total = 
                   //cart_list[endLength].price;
                   break;
                }
            }
        }
        console.log("cart list => ", cart_list)
        return cart_list;
    }
        
        
module.exports = {cart, save};