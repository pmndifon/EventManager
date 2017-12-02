describe('Routes Users', () => {
  const Users = app.datasource.Users;
  const defaultUser = {
    id: 1,
    fullname
    userame: 'Default user',
    email:
    password: 'Marian',
    capacity: 5000,
    cost: 200000.00,
    userId: 1,
  };

  // Destroys defaultUser and creates a new one after each test
  beforeEach((done) => {
    Users
      .destroy({ where: {} })
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
        userName: 'Maranatha user',
        location: 'Marian',
        capacity: 5000,
        cost: 200000.00,
        userId: 1,
      };
      request
        .post('/users')
        .send(newUser)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(newUser.id);
          expect(res.body.userName).to.be.eql(newUser.userName);

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
          expect(res.body[0].userName).to.be.eql(defaultUser.userName);

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
          expect(res.body.userName).to.be.eql(defaultUser.userName);

          done(err);
        });
    });
  });

  // Update A User
  describe('PUT /users/{id}', () => {
    it('should update a user', (done) => {
      const updatedUser = {
        id: 1,
        userName: 'Updated user',
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
