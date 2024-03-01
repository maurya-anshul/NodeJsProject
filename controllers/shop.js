const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProduct = (req, res, next) => {
  const callBackFnBody = (products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Shop Product List",
      path: "/product-list",
    });
  };

  Product.fetchAll(callBackFnBody);
};

exports.getProductDetails = (req, res, next) => {
  const productId = req.params.productId;

  console.log(typeof productId)
  Product.findProductById(productId, (product)=>{
    console.log('product is', product);
    res.render('shop/product-details', {
      pageTitle: "Product Details",
      path: "/product-details",
      product: product
    })
  });
};


exports.getShopIndex = (req, res, next) => {
  const callBackFnBody = (products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "My Shop",
      path: "/",
    });
  };

  Product.fetchAll(callBackFnBody);
};

exports.getMyCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "My Cart",
    path: "/cart",
  });
};

exports.postMyCart = (req,res,next)=>{
  const productId = req.body.productId;
  // const price = req.body.price;
  Product.findProductById(productId, products => {
    console.log(productId, products)
     Cart.addProduct(productId, products.price);
  })
  res.redirect('/cart')
}

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "My Checkout",
    path: "/checkout",
  });
};

exports.getMyOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "My Orders",
    path: "/orders",
  });
};

