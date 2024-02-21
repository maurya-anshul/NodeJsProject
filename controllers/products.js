
const Product=require('../models/product')

exports.getAddProduct= (req, res, next) => {
    res.render('add-product',{
      pageTitle: 'Add Product',
      path:'/add-product',
      formCSS: true,
      productCSS: true,
      activeShop: true
    })
  }


  exports.postAddProduct=(req, res, next) => {
    // console.log(req.body);
    // products.push({title:req.body.title})
    const product = new Product(req.body.title); // {title: value}
    product.save();
    res.redirect("/");
  }


  exports.getProduct=(req, res, next) => {
   const callBackFnBody= (products)=>{
      res.render('shop',{
        prods:products,
        pageTitle: 'Shop',
        path:'/',
        hasproduct: products.length>0,
        formCSS: true,
        productCSS: true,
        activeShop: true
      })
    };

   Product.fetchAll(callBackFnBody)
    
  }

  exports.getContactUs=(req, res, next) => {
    res.render('contactUs',{
      pageTitle: 'Contact Us',
      path:'/contactUs',
      formCSS: true,
      productCSS: true,
      activeShop: true
    })
  }

 exports.postSuccess= (req, res, next) => {
    res.render('success',{
      pageTitle: 'Form Filled',
      path:'/success',
      formCSS: true,
      productCSS: true,
      activeShop: true
    })
  }