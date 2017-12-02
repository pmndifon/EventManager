import UserController from '../controllers/userControllers';

export default (app) => {
  const userController = new UserController(app.datasource.Users);

  app.route('/users')
    .get((req, res) => {
      userController.getAllUsers()
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req, res) => {
      userController.createUser(req.body)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/users/:id')
    .get((req, res) => {
      userController.getUserById(req.params)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .put((req, res) => {
      userController.updateUser(req.body, req.params)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .delete((req, res) => {
      userController.deleteUser(req.params)
        .then((response) => {
          res.sendStatus(response.statusCode);
        });
    });
};
