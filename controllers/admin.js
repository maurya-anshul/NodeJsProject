const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/add-product",
    formCSS: true,
    productCSS: true,
    activeShop: true,
  });
};

exports.adminProducts = (req,res,next)=>{
    const callBackFnBody = (products) => {
        res.render("admin/products", {
          prods: products,
          pageTitle: "All Admin Product List",
          path: "/products",
        });
      };
    
      Product.fetchAll(callBackFnBody);
}

exports.postAddProduct = (req, res, next) => {
  // console.log(req.body);
  // products.push({title:req.body.title})

  const title=req.body.title;
  const description=req.body.description;
  const price=req.body.price;
  const imageUrl=req.body.imageUrl;
  const product = new Product(title, description, price, imageUrl); // {title: value}
  product.save();
  res.redirect("/");
};