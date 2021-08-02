const UserController = require("./controllers/UserController.js");

module.exports = (app) => {
    app.get('/status',UserController.status)
    app.get('/hello/:person',UserController.hello)
    app.post('/user',UserController.create)//create user
    app.put('/user/:userId',UserController.put)
    app.delete('/user/:userId',UserController.remove)
    app.get('/user/:userId',UserController.show)
    app.get('/user',UserController.index)
}