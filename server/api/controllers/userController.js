const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = 400) => defaultResponse({
  error: message,
  statusCode,
}, statusCode);

class UserController {
  constructor(Users) {
    this.Users = Users;
  }

  createUser(req) {
    return this.Users
      .findOrCreate({
        where: {
          userName: req.body.userName,
          dateBegin: new Date(req.body.dateBegin),
        },
        defaults: {
          userType: req.body.userType,
          bookingStatus: req.body.bookingStatus,
          dateEnd: new Date(req.body.dateEnd),
          userId: req.body.userId,
          centerId: req.body.centerId,
        },
      })
      .then(user => defaultResponse(user, 201));
  }

  getAllUsers() {
    return this.Users
      .findAll({})
      .then((users) => {
        if (users.length > 0) {
          return defaultResponse(users);
        }
        return errorResponse('no users available', 404);
      })
      .catch(error => errorResponse(error.message));
  }

  getUserById(params) {
    return this.Users.findOne({
      where: params,
    })
      .then(users => defaultResponse(users))
      .catch(error => errorResponse(error.message));
  }

  updateUser(data, params) {
    return this.Users.update(data, {
      where: params,
    })
      .then(users => defaultResponse(users))
      .catch(error => errorResponse(error.message, 422));
  }

  deleteUser(params) {
    return this.Users
      .destroy({
        where: params,
      })
      .then(result => defaultResponse(result, 204))
      .catch(error => errorResponse(error.message, 422));
  }
}

export default UserController;

