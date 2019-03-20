let cakes = require('./../controllers/cakes');
module.exports = (app)=>{
    app.get('/api/cakes', cakes.index);
    app.post('/api/cakes', cakes.create);
}