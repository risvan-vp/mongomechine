const express = require('express');
const router = express.Router();    
const{createproduct,
    getproducts,
    getproductById,
    updateproduct,
    deleteproduct
} = require("../controller/pcontroller");

router.post('/', createproduct);
router.get("/", getproducts);
router.get('/:id', getproductById);
router.put('/:id', updateproduct);
router.delete('/:id', deleteproduct);
module.exports = router;
