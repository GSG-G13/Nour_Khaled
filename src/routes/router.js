const express = require("express");

const {getAPI } = require("../controller/users/index")
const {clientError,serverError } = require("../controller/errors/error")

const router =express.Router();

router.get('/movie/:value',getAPI);
router.use(clientError);
router.use(serverError);
module.exports = router;

