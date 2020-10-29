import express from 'express';


import productsRoutes from './routes/product.routes';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.json('welcome')
});

app.use('/api/products', productsRoutes);

export default app;
