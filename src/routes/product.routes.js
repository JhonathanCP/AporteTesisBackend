import { Router } from 'express'

const router = Router();

import { createProduct, getProducts, getProductsById, updateProduct, deleteProduct } from '../controllers/products.controller';

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:productId', getProductsById);

router.put('/:productId', updateProduct);

router.delete('/:productId', deleteProduct);

export default router