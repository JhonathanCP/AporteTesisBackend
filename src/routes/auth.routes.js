import { Router } from 'express'

const router = Router();

import { signIn, signUp } from '../controllers/auth.controller';
import { verifySignUp } from '../middlewares'

router.post('/signup',[
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
], signUp);
router.post('/signin', signIn);

export default router