const UserController = require('../controller/user_controller');

module.exports = (app) => {
    app.route('/api/user').post(UserController.addUser);
    app.route('/api/user').get(UserController.findAllUser);
    app.route('/api/user/:id').get(UserController.findAllUserById);
    app.route('/api/user').put(UserController.updateUser);
    app.route('/api/user/').delete(UserController.deleteUser);
}