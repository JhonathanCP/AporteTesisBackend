import express from 'express';


import productsRoutes from './routes/product.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.json('welcome')
});

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);

export default app;
