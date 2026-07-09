const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

module.exports = class Home{
    constructor(address, price, photo){
        this.address=address;
        this.price=price;
        this.photo=photo;
    }

    save(){
        Home.fetchAll(registeredHomes =>{
            registeredHomes.push(this);
        const homeDataPath = path.join(rootDir,'data','home.json');
        fs.writeFile(homeDataPath,JSON.stringify(registeredHomes), error=>{
        });
        });
        
    }
    static fetchAll(callback){
        const homeDataPath = path.join(rootDir,'data','home.json');
        fs.readFile(homeDataPath,(err,data)=>{
            callback(!err ? JSON.parse(data): []);
        });
    }
}