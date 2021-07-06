import { Router } from 'express'

const router = Router();

import { createProduct, getProducts, getProductsById, updateProduct, deleteProduct } from '../controllers/products.controller';
import { authJwt } from '../middlewares';

/* router.post('/',verifyToken ,createProduct); */
router.post('/',[authJwt.verifyToken, authJwt.isModerator] ,createProduct);

//sin middlewares
router.get('/', getProducts);

router.get('/:productId', getProductsById);

router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], updateProduct);

router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], deleteProduct);

export default router