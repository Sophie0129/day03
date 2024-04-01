const express = require("express");
const ctrl = require("../../controller/cookie/cookie_ctrl")

const router = express.Router();

router.get("/", ctrl.index)
router.get("/popup", ctrl.popup)
router.get("/cookie02", ctrl.cookie02)
router.get("/popup02", ctrl.popup02)
router.get("/cart", ctrl.cart)
router.get("/save/:goods", ctrl.save)
// save/ 로 들어오는 goods라는 변수를 받으면 ctrl.save로 이동한다는 의미
//변수를 받아주려면 콜론이 필요하다

router.get("/view_list", ctrl.viewList)

router.get("/makeCookie", ctrl.makeCookie)

module.exports = router;