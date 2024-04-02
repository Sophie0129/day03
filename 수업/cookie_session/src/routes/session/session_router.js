const express = require("express");
const ctrl = require("../../controller/session/session_ctrl");
const router = express.Router();

router.get("/", ctrl.index );

router.get("/set_session", ctrl.setSession );
router.get("/get_session", ctrl.getSession );
router.get("/del_session", ctrl.delSession );

/* get방식의 메소드
a href / location.href / method */

router.get("/login", ctrl.login);
router.post("/login_check", ctrl.loginCheck)
//포스트 방식은 포스트로 받아준다.
router.get("/success", ctrl.success)
router.get("/logout", ctrl.logout)

router.get("/cart_loginchk", ctrl.cart_loginchk)

module.exports = router;