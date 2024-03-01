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
  constructor(_productId, _title, _description, _price, _imageUrl) {
    this.productId = _productId;
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

  saveModifiedFile(){
    if(this.productId){
      getProductFromFile((products)=>{
        const existingProdIndex = products.findIndex((product)=> product.productId === this.productId);
        
        const modifiedProducts = [...products];
        modifiedProducts[existingProdIndex] = this;

        fs.writeFile(pathBuild, JSON.stringify(modifiedProducts), (err)=>{
          console.log(err);
        })

      })
    }
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


  static remove(id){
    getProductFromFile((products)=>{
      const updatedProducts = products.filter((product)=> product.productId !== id);
    fs.writeFile(pathBuild, JSON.stringify(updatedProducts), (err)=>{
      console.log(err);
    })
    });
  }

};
