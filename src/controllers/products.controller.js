import Product from '../models/Product';

export const createProduct = async (req, res) => {
    const { name, category, price, imgURL } = req.body;

    const newProduct = new Product({name, category, price, imgURL});

    const productSaved = await newProduct.save();

    res.status(201).json(productSaved);
}

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

export const getProductsById = async (req, res) => {
    const id = req.params.productId;

    const product = await Product.findById(id);
    
    res.status(200).json(product);
}

export const updateProduct = async (req, res) => {
    const id = req.params.productId;
    const info = req.body;

    const productUpdated = await Product.findByIdAndUpdate(id, info, {
        new: true
    });

    res.status(200).json(productUpdated);
}

export const deleteProduct = async (req, res) => {
    const id = req.params.productId;

    await Product.findByIdAndDelete(id);

    res.status(204).json();
}