const {Router} = require ("express");
const router = Router();
const photosCtrl = require("../controller/photos.controller");



router.get("/", photosCtrl.getStart);
router.get("/photos", photosCtrl.getBook);
router.get("/photos", photosCtrl.getAllBooks);
router.post("/photos", photosCtrl.postBook);
router.put("/photos", photosCtrl.putBook);
router.delete("/photos", photosCtrl.deleteBook);

module.exports = router;