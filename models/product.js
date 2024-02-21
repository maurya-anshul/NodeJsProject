
const path=require('path')
const fs=require('fs');

const pathBuild=path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
)

const getProductFromFile= (callBackFn)=>{

    
    fs.readFile(pathBuild, (err,data)=>{
        if(err) return callBackFn([]);
        callBackFn( JSON.parse(data))
    })
}

module.exports = class Product{

    constructor(title){
        this.title=title;
    }

    save(){
        getProductFromFile((products)=>{
  
            products.push(this)  // this is pointing to class instance

            fs.writeFile(pathBuild, JSON.stringify(products),(err)=>{
                console.log(err);
            })
        })
    }

    static fetchAll(callBackFn){
       getProductFromFile(callBackFn);

    }
}