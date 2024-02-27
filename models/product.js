const path = require("path");
const fs = require("fs");

const pathBuild = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductFromFile = (callBackFn) => {
  fs.readFile(pathBuild, (err, data) => {
    if (err) return callBackFn([]);
    callBackFn(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(_title, _description, _price, _imageUrl) {
    this.title = _title;
    this.description = _description;
    this.price = _price;
    this.imageUrl = _imageUrl
  }

  save() {
    
    this.productId = Math.round(Math.random()*1000).toString();

    getProductFromFile((products) => {

      products.push(this); // this is pointing to class instance

      fs.writeFile(pathBuild, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callBackFn) {
    getProductFromFile(callBackFn);
  }

  static findProductById(pid, callBackFn){
     getProductFromFile((products)=>{
      const product=products.find((product)=> product.productId===pid);
       callBackFn(product);
     })
  }

};
