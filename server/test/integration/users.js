import { Users, Centers, Events } from '../../api/models';

describe('Routes Users', () => {
  const defaultUser = {
    id: 1,
    fullname: 'Patrick Mayorkun',
    username: 'pamayark',
    email: 'pmayoork@ymail.com',
    password: 'milk',
    isAdmin: true,
  };

  // Destroys defaultUser and creates a new one after each test
  beforeEach((done) => {
    Events
      .destroy({ where: {} })
      .then(() => Centers.destroy({ where: {} }))
      .then(() => Users.destroy({ where: {} }))
      .then(() => Users.destroy({ where: {} }))
      .then(() => Users.create(defaultUser))
      .then(() => {
        done();
      });
  });

  // Create A User
  describe('POST /users', () => {
    it('should create a user', (done) => {
      const newUser = {
        id: 2,
        fullname: 'Patrick Blaize',
        username: 'pablaize',
        email: 'pmablaize@ymail.com',
        password: 'milkeggs',
        isAdmin: true,
      };
      request
        .post('/users')
        .send(newUser)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(newUser.id);
          expect(res.body.username).to.be.eql(newUser.username);

          done(err);
        });
    });
  });

  // Get All Users
  describe('GET /users', () => {
    it('should return a list of users', (done) => {
      request
        .get('/users')
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(defaultUser.id);
          expect(res.body[0].username).to.be.eql(defaultUser.username);

          done(err);
        });
    });
  });

  // Get One User
  describe('GET /users/{id}', () => {
    it('should return a user', (done) => {
      request
        .get('/users/1')
        .end((err, res) => {
          expect(res.body.id).to.be.eql(defaultUser.id);
          expect(res.body.username).to.be.eql(defaultUser.username);

          done(err);
        });
    });
  });

  // Update A User
  describe('PUT /users/{id}', () => {
    it('should update a user', (done) => {
      const updatedUser = {
        id: 1,
        username: 'Updated user',
        location: 'updated location',
      };
      request
        .put('/users/1')
        .send(updatedUser)
        .end((err, res) => {
          expect(res.body).to.be.eql([1]);

          done(err);
        });
    });
  });

  // Delete A User
  describe('DELETE /users/{id}', () => {
    it('should delete a user', (done) => {
      request
        .delete('/users/1')
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
