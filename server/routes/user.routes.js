const LoginRegController = require('../controllers/loginReg.controller'),
    UserController = require('../controllers/user.controller'),
    { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/register', LoginRegController.register);
    app.post('/api/login', LoginRegController.login);
    app.get('/api/logout', authenticate, LoginRegController.logout);
    app.get('/api/users', authenticate, UserController.index);
    app.get('/api/users/:id', authenticate, UserController.show);
    app.post('/api/users/new', authenticate, UserController.create);
    app.put('/api/users/edit/:id', authenticate, UserController.update);
    app.delete('/api/users/delete/:id', authenticate, UserController.destroy);
};
