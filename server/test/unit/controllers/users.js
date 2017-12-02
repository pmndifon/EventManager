import UserController from '../../../api/controllers/userControllers';

describe('User Controllers', () => {
  describe('getAllUsers()', () => {
    it('shoulld return a list of users', () => {
      const Users = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        fullname: 'Patrick Ndifon',
        username: 'patmand187',
        email: 'paxy@gmail.com',
        password: 'firman187',
        isAdmin: false,
      },
      {
        id: 1,
        fullname: 'Patrick Ndifon',
        username: 'patmand187',
        email: 'paxy@gmail.com',
        password: 'firman187',
        isAdmin: false,
      }];

      td.when(Users.findAll({})).thenResolve(expectedResponse);

      const userController = new UserController(Users);
      return userController.getAllUsers()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('getUserById()', () => {
    it('should return a user', () => {
      const Users = {
        findOne: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        fullname: 'Patrick Ndifon',
        username: 'patmand187',
        email: 'paxy@gmail.com',
        password: 'firman187',
        isAdmin: false,
      }];

      td.when(Users.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const userController = new UserController(Users);
      return userController.getUserById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('createUser()', () => {
    it('should create a user', () => {
      const Users = {
        create: td.function(),
      };

      const requestBody = {
        id: 1,
        fullname: 'Patrick Ndifon',
        username: 'patmand187',
        email: 'paxy@gmail.com',
        password: 'firman187',
        isAdmin: false,
      };

      const expectedResponse = [{
        id: 1,
        fullname: 'Patrick Ndifon',
        username: 'patmand187',
        email: 'paxy@gmail.com',
        password: 'firman187',
        isAdmin: false,
      }];

      td.when(Users.create(requestBody)).thenResolve(expectedResponse);

      const userController = new UserController(Users);
      return userController.createUser(requestBody)
        .then((response) => {
          expect(response.statusCode).to.be.eql(201);
          expect(response.data).to.be.eql(expectedResponse);
        });
    });
  });

  describe('updateUser()', () => {
    it('should update a user', () => {
      const Users = {
        update: td.function(),
      };

      const requestBody = {
        id: 1,
        fullname: 'Patrick Ndifon',
        username: 'patmand187',
        email: 'paxy@gmail.com',
        password: 'firman187',
        isAdmin: false,
      };

      const expectedResponse = [{
        id: 1,
        fullname: 'Patrick Ndifon',
        username: 'patmand187',
        email: 'paxy@gmail.com',
        password: 'firman187',
        isAdmin: false,
      }];

      td.when(Users.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

      const userController = new UserController(Users);
      return userController.updateUser(requestBody, { id: 1 })
        .then(response =>
          expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('deleteUser()', () => {
    it('should delete a user', () => {
      const Users = {
        destroy: td.function(),
      };

      td.when(Users.destroy({ where: { id: 1 } })).thenResolve({});

      const userController = new UserController(Users);
      return userController.deleteUser({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});
