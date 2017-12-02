const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = 400) => defaultResponse({
  error: message,
}, statusCode);


class UserController {
  constructor(User) {
    this.User = User;
  }

  createUser(data) {
    return this.User
      .create(data)
      .then(user => defaultResponse(user, 201))
      .catch(error => errorResponse(error.message, 422));
  }

  getAllUsers() {
    return this.User.findAll({})
      .then(users => defaultResponse(users))
      .catch(error => errorResponse(error.message));
  }

  getUserById(params) {
    return this.User.findOne({
      where: params,
    })
      .then(user => defaultResponse(user))
      .catch(error => errorResponse(error.message));
  }

  updateUser(data, params) {
    return this.User.update(data, {
      where: params,
    })
      .then(user => defaultResponse(user))
      .catch(error => errorResponse(error.message, 422));
  }

  deleteUser(params) {
    return this.User
      .destroy({
        where: params,
      })
      .then(result => defaultResponse(result, 204))
      .catch(error => errorResponse(error.message, 422));
  }
}

export default UserController;

