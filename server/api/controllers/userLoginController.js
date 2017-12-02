import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

class UserLoginController {
  constructor(Users) {
    this.Users = Users;
  }


  login(req, res) {
    return this.Users
      .findOne({
        where: {
          email: req.body.email,
        },
      }).then((response) => {
        if (!response) {
          return res.send({
            message: 'Account does not exist! Visiit /api/v1/users/signup and register.',
          });
        }
        bcrypt.compare(req.body.password, response.dataValues.password, (err, hash) => {
          if (hash) {
            const payloader = {
              isAdmin: this.Users.isAdmin,
              id: response.id,
            };
            const token = jwt.sign(payloader, process.env.TOKEN_PASSWORD, { expiresIn: 60 * 60 });
            if (token) {
              return res.send({
                message: 'Login Successful',
                token,
              });
            }
          }
          return res.send({
            message: 'Incorrect password',
          });
        });
      }).catch(error => res.send({
        message: error,
      }));
  }
}

export default UserLoginController;
