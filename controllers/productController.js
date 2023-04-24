
const db = require('../models');

//Crate Model
const Product = db.products
const Review = db.reviews

//main work

//1.Create Product
const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}
//2.Get all products
const getAllProduct = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}
//3.get single product
const getOneProduct = async (req, res) => {
    let id = req.params.id
    let products = await Product.findOne({ where: { id: id } })
    res.status(200).send(products)
}
//4.update product
const updateProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.update(req.body, { where: { id: id } })
    res.status(200).send(product)

}

//5. Delete product by id
const deleteProduct = async (req, res) => {
    let id = req.params.id
    await Product.destroy({ where: { id: id } })
    res.status(200).send('Product deleted!')
}

//6. publish product
const getPublishedProduct = async (req, res) => {
    let products = await Product.findAll({ where: { published: true } })
    res.status(200).send(products)
}

module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct

}