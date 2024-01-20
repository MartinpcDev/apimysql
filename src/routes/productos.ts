import { upload } from "../middleware/upload";
import { deleteProduct, getAllProducts, getProduct, postProduct, updateProduct } from "../controllers/products.controller";
import { Router } from "express";

export const router = Router()

router.get('/',getAllProducts)
router.get('/:id',getProduct)
router.post('/',upload.single('imagen'),postProduct)
router.put('/:id',updateProduct)  
router.delete('/:id',deleteProduct)