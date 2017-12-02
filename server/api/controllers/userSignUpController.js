import bcrypt from 'bcrypt';

const saltRound = 10;

class UserSignUpController {
  constructor(Users) {
    this.Users = Users;
  }

  signUp(req, res) {
    return this.Users.findAll({
      where: {
        email: req.body.email,
      },
    }).then((response) => {
      if (response.length !== 0) {
        return res.send({
          message: 'Email or username has been used',
        });
      }

      const hash = bcrypt.hashSync(password, saltRound);
      return this.Users
        .create({
          fullname: req.body.fullname,
          email: req.body.email,
          username: req.body.username,
          password: hash,
        });
    })
      .then((user) => {
        const {
          fullname, email, username, password,
        } = user;
        return res.status(200).send({
          fullname,
          username,
          email,
          password,
        });
      })
      .catch(() => res.status(400).send({
        message: 'Bad Request',
      }));
  }
}


export default UserSignUpController;
