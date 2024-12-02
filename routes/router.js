const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

router.get("/", controller.indexActionGet);
router.get("/addItem/:category", controller.addItemGet);
router.get("/updateItem/:itemId", controller.updateItemGet);
/*
router.post("/searchItem", controller.searchItemPost);
router.post("/newCategory", controller.newCategoryPost);
router.post("/newItem", controller.newItemPost);
router.post("/updateCategory", controller.updateCategoryPost);
router.post("/updateItem", controller.updateItemPost);
router.post("/updateList", controller.updateLis);
router.post("/deleteCategory", controller.deleteCategoryPost);
router.post("/deleteItem", controller.deleteItemPost);
router.use("*", controller.errorGet);
*/

module.exports = router;
