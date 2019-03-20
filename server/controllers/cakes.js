let mongoose = require('mongoose');
let Cake = mongoose.model('cakes');
module.exports = {
    index: (req,res)=>{
        Cake.find({}, (err, cakes)=>{
            res.json(cakes);
        })
    },
    create: (req,res)=>{
        console.log(req.body);
        let theCake = new Cake(req.body);
        theCake.save((err)=>{
            if(err){
                res.json(err);
            }else{
                res.json(theCake);
            }
        })
    }
}