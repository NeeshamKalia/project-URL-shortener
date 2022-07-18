const express = require("express");
const router = express.Router();






router.post("/url/shorten", urlController.createShorten);
router.get("/:urlCode", urlController.getUrl);




router.all("/**", function (req, res) {
    res.status(400).send({status: false,msg: "The api you requested is not available"})});

module.exports = router;