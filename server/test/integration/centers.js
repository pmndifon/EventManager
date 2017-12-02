import { Users, Centers } from '../../api/models';


describe('Routes Centers', () => {
  const defaultUser = {
    id: 1,
    fullname: 'Patrick Mayorkun',
    username: 'pamayark',
    email: 'pmayoork@ymail.com',
    password: 'milk',
    isAdmin: true,
  };

  const defaultCenter = {
    id: 1,
    centerName: 'Default center',
    location: 'Marian',
    capacity: 5000,
    cost: 200000.00,
    userId: defaultUser.id,
  };

  // Destroys defaultCenter defaultUser and creates a new one before each test
  beforeEach((done) => {
    Centers
      .destroy({ where: {} })
      .then(() => Users.destroy({ where: {} }))
      .then(() => Users.create(defaultUser))
      .then(() => Centers.create(defaultCenter))
      .then(() => {
        done();
      });
  });

  // Create A Center
  describe('POST /centers', () => {
    it('should create a center', (done) => {
      const newCenter = {
        id: 2,
        centerName: 'Maranatha center',
        location: 'Marian',
        capacity: 5000,
        cost: 200000.00,
        userId: defaultUser.id,
      };
      request
        .post('/centers')
        .send(newCenter)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(newCenter.id);
          expect(res.body.centerName).to.be.eql(newCenter.centerName);

          done(err);
        });
    });
  });

  // Get All Centers
  describe('GET /centers', () => {
    it('should return a list of centers', (done) => {
      request
        .get('/centers')
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(defaultCenter.id);
          expect(res.body[0].centerName).to.be.eql(defaultCenter.centerName);

          done(err);
        });
    });
  });

  // Get One Center
  describe('GET /centers/{id}', () => {
    it('should return a center', (done) => {
      request
        .get('/centers/1')
        .end((err, res) => {
          expect(res.body.id).to.be.eql(defaultCenter.id);
          expect(res.body.centerName).to.be.eql(defaultCenter.centerName);

          done(err);
        });
    });
  });

  // Update A Center
  describe('PUT /centers/{id}', () => {
    it('should update a center', (done) => {
      const updatedCenter = {
        id: 1,
        centerName: 'Updated center',
        location: 'updated location',
      };
      request
        .put('/centers/1')
        .send(updatedCenter)
        .end((err, res) => {
          expect(res.body).to.be.eql([1]);

          done(err);
        });
    });
  });

  // Delete A Center
  describe('DELETE /centers/{id}', () => {
    it('should delete a center', (done) => {
      request
        .delete('/centers/1')
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
