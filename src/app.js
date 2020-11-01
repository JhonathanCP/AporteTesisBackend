import express from 'express';


import productsRoutes from './routes/product.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes'
import { createRoles } from './libs/initialSetup';


const app = express();
createRoles();

app.use(express.json());

app.get('/api', (req, res) => {
    res.json('welcome')
});

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

export default app;
