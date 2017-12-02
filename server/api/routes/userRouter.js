import UserController from '../controllers/userController';
import UserSignUpController from '../controllers/userSignUpController';
import UserLoginController from '../controllers/userLoginController';
import checkAuth from '../middleware/checkAuth';
import { Users } from '../models';

export default (app) => {
  // Controller instances
  const userController = new UserController(Users);
  const userSignup = new UserSignUpController(Users);
  const userLogin = new UserLoginController(Users);


  // Login
  app.route('/api/v1/users/login')
    .post((req, res) => {
      userLogin.login(req, res)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  // Sign up
  app.route('/api/v1/users/signup')
    .post((req, res) => {
      userSignup.signup(req, res)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/api/v1/users')
    .get((req, res) => {
      userController.getAllUsers()
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req, res) => {
      userController.createUser(req)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/api/v1/users/:id')
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
