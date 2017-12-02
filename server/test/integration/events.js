describe('Routes Events', () => {
  const Events = app.datasource.Events;
  const defaultEvent = {
    id: 1,
    userId: 2,
    centerId: 1,
    eventName: 'Default event',
    eventType: 'Type',
    dateBegin: 2017 - 10 - 8,
    dateEnd: 2017 - 10 - 12,
    bookingStatus: 'pending',
  };

  // Destroys defaultEvent and creates a new one after each test
  beforeEach((done) => {
    Events
      .destroy({ where: {} })
      .then(() => Events.create(defaultEvent))
      .then(() => {
        done();
      });
  });

  // Create An Event
  describe('POST /events', () => {
    it('should create a event', (done) => {
      const newEvent = {
        id: 2,
        userId: 2,
        centerId: 2,
        eventName: 'New event',
        eventType: 'Type',
        dateBegin: 2017 - 10 - 8,
        dateEnd: 2017 - 10 - 12,
        bookingStatus: 'pending',
      };
      request
        .post('/events')
        .send(newEvent)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(newEvent.id);
          expect(res.body.eventName).to.be.eql(newEvent.eventName);

          done(err);
        });
    });
  });

  // Get All Events
  describe('GET /events', () => {
    it('should return a list of events', (done) => {
      request
        .get('/events')
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(defaultEvent.id);
          expect(res.body[0].eventName).to.be.eql(defaultEvent.eventName);

          done(err);
        });
    });
  });

  // Get One Event
  describe('GET /events/{id}', () => {
    it('should return a event', (done) => {
      request
        .get('/events/1')
        .end((err, res) => {
          expect(res.body.id).to.be.eql(defaultEvent.id);
          expect(res.body.eventName).to.be.eql(defaultEvent.eventName);

          done(err);
        });
    });
  });

  // Update A Event
  describe('PUT /events/{id}', () => {
    it('should update a event', (done) => {
      const updatedEvent = {
        id: 1,
        eventName: 'Updated event',
        location: 'updated location',
      };
      request
        .put('/events/1')
        .send(updatedEvent)
        .end((err, res) => {
          expect(res.body).to.be.eql([1]);

          done(err);
        });
    });
  });

  // Delete A Event
  describe('DELETE /events/{id}', () => {
    it('should delete a event', (done) => {
      request
        .delete('/events/1')
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
