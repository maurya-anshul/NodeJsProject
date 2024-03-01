const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/add-product",
    isEdit: "",
  });
};

exports.adminProducts = (req, res, next) => {
  const callBackFnBody = (products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "All Admin Product List",
      path: "/products",
    });
  };

  Product.fetchAll(callBackFnBody);
};

exports.postAddProduct = (req, res, next) => {
  // console.log(req.body);
  // products.push({title:req.body.title})

  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const product = new Product(null, title, description, price, imageUrl); // {title: value}
  product.save();
  res.redirect("/");
};

exports.getEditMyProduct = (req, res, next) => {
  const isEditMode = req.query.isEditing;
  const productId = req.params.productId;
  Product.findProductById(productId, (product) => {
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "",
      product: product,
      isEdit: isEditMode,
    });
  });
};

exports.saveModifiedProduct = (req, res, next) => {
  const reqBody = req.body;
  const productId = reqBody.productId;
  const modifiedTitle = reqBody.title;
  const modifiedDescription = reqBody.description;
  const modifiedPrice = reqBody.price;
  const modifiedImgUrl = reqBody.imageUrl;
 
  const modifiedProduct = new Product(
    productId,
    modifiedTitle,
    modifiedDescription,
    modifiedPrice,
    modifiedImgUrl
  );
   modifiedProduct.saveModifiedFile();
   res.redirect('/admin/admin-product');
};

exports.removeProduct = (req, res, next)=>{
  const productId = req.body.productId;
  Product.remove(productId);
  res.redirect('/admin/admin-product');
}
