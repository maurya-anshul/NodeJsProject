const products=[];
// const path=require('path')
// const fs=require('fs');
module.exports = class Product{

    constructor(title){
        this.title=title;
    }

    save(){
        
        products.push(this); //{title : 'xxxx'}
    }

    static fetchAll(){
        return products;
    }
}