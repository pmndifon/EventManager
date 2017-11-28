import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app.js';
import request from 'supertest';

let should = chai.should();

chai.use(chaiHttp);

// ALL REQUESTS for EVENTS
describe('VALID HTTP REQUESTS FOR CENTERS', () => {

  // GET Requests
  describe('GET Requests', () => {
    it('should GET all centers', (done) => {
      chai.request(app)
        .get('/api/v1/centers/')
        .set('Accept', 'application/json')
        .end(function (err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object')
          res.body.centers.should.be.a('array');
          done();
        });
    });

    it('should GET a single center by ID', (done) => {
      chai.request(app)
        .get('/api/v1/centers/3')
        .end(function (err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.center.should.have.property('id');
          res.body.center.id.should.equal(3);
          done();
        });
    });
  })
  
  // POST Requests
  describe('POST Requests', () => {

    it('should test all properties in a single added center', (done) => {
      let newCenter = {
        id: 0,
        name: 'Mary Ekpo Center',
        capacity: 5000,
        centerType: 'Hall',
        location: 'Marian, Calabar',
        facilities: ['Sound', 'AC'],
        description: 'Very beautiful'
      }
      chai.request(app)
        .post('/api/v1/centers/')
        .send(newCenter)
        .end((err, res) => {
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.center.should.have.property('id');
          res.body.center.should.have.property('name');
          res.body.center.should.have.property('capacity');
          res.body.center.should.have.property('centerType');
          res.body.center.should.have.property('location');
          res.body.center.should.have.property('facilities');
          res.body.center.should.have.property('description');

          done(err);
        })
    });

    it('should test for valid entries in a single added center', (done) => {
      let newCenter = {
        id: 0,
        name: 'Mary Ekpo Center',
        capacity: 5000,
        centerType: 'Hall',
        location: 'Marian, Calabar',
        facilities: ['Sound', 'AC'],
        description: 'Very beautiful'
      }
      chai.request(app)
        .post('/api/v1/centers/')
        .send(newCenter)
        .end((err, res) => {
          res.should.be.json;
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.center.name.should.be.a('string');
          res.body.center.name.should.not.be.eql('null');
          res.body.center.capacity.should.be.a('number');
          res.body.center.capacity.should.not.be.eql(0);
          res.body.center.centerType.should.be.a('string');
          res.body.center.facilities.should.be.a('array');
          res.body.center.facilities.should.not.be.eql('null');
          res.body.center.description.should.be.a('string');
          done(err);
        })
    });

    it('should check if single center has been added', (done) => {
      let newCenter = {
        id: 0,
        name: 'Mary Ekpo Center',
        capacity: 5000,
        centerType: 'Hall',
        location: 'Marian, Calabar',
        facilities: ['Sound', 'AC'],
        description: 'Very beautiful'
      }
      chai.request(app)
        .post('/api/v1/centers/')
        .send(newCenter)
        .end((err, res) => {
          res.should.be.json;
          res.should.have.status(201);
          res.body.should.be.a('object');
          done(err);
        })
    });

  });

  // PUT Requests
  describe('PUT Requests', () => {
    it('should update center name', (done) => {

      let newData = {
        name: "The Yellow Hall"
      }

      chai.request(app)
        .put('/api/v1/centers/2')
        .send(newData)
        .end((err, res) => {
          res.body.center.name.should.be.equal(newData.name);
          done(err);
        });
    });

    it('should update multiple parameters of center', (done) => {

      let newData = {
        name: "The White Wall",
        location: "Illupeju, Lagos",
        capacity: 50,
        cost: 50000,
        facilities: ["Changing room", "Parking Lot"]
      }

      chai.request(app)
        .put('/api/v1/centers/3')
        .send(newData)
        .end((err, res) => {
          res.body.center.name.should.be.a('string').and.to.equal(newData.name);
          res.body.center.location.should.be.a('string').and.to.equal(newData.location);
          res.body.center.capacity.should.be.a('number').and.to.equal(newData.capacity);
          res.body.center.cost.should.be.a('number').and.to.equal(newData.cost);
          res.body.center.facilities.should.be.a('array').and.to.deep.equal(newData.facilities);
          done(err);
        });
    });

    it('should confirm update', (done) => {

      let newData = {
        name: "The White Wall",
        location: "Illupeju, Lagos",
        capacity: 50,
        cost: 50000,
        facilities: ["Changing room", "Parking Lot"]
      }

      chai.request(app)
        .put('/api/v1/centers/3')
        .send(newData)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('message').and.to.equal('Update successful.');
          res.body.should.have.property('error').and.to.equal(false);
          done(err);
        });
    });

    it('should test that the property and their types the same for the update', (done) => {

      let newData = {
      }

      chai.request(app)
        .put('/api/v1/centers/3')
        .send(newData)
        .end((err, res) => {
          res.body.center.should.have.property('name').and.be.a('string');
          res.body.center.should.have.property('capacity').and.be.a('number');
          res.body.center.should.have.property('centerType').and.be.a('string');
          res.body.center.should.have.property('cost').and.be.a('number');
          res.body.center.should.have.property('location').and.be.a('string');
          res.body.center.should.have.property('facilities').and.be.a('array');
          res.body.center.should.have.property('description').and.be.a('string');
          done(err);
        });
    });
  });

  // DELETE Requests
  describe('DELETE Requests', () => {

    it('should delete a single center', () => {
      chai.request(app)
        .delete('/api/v1/centers/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.to.equal('Center deleted');
          done();
        });
    });

  });

});


// ALL REQUESTS for EVENTS
describe('VALID HTTP REQUESTS FOR EVENTS', () => {

  // GET Requests
  describe('GET Requests', () => {
    it('should GET all events', (done) => {
      chai.request(app)
        .get('/api/v1/events/')
        .set('Accept', 'application/json')
        .end(function (err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object')
          res.body.events.should.be.a('array');
          done();
        });
    });

    it('should GET a single event by ID', (done) => {
      chai.request(app)
        .get('/api/v1/events/1')
        .end(function (err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.event.should.have.property('id');
          res.body.event.id.should.equal(1);
          done();
        });
    });
  })

 
  // POST Requests
  describe('POST Requests', () => {

    it('should test all properties in a single added event', (done) => {

      let newEvent = {
        name: 'Wedding Anniversary',
        eventType: 'Perty',
        dateBegin: '12-May-2018',
        dateEnd: '13-May-2018',
        centerName: "Obong Calabar",
        description: "A wonderful celebration"
      }

      chai.request(app)
        .post('/api/v1/events/')
        .send(newEvent)
        .end((err, res) => {
          res.body.should.be.a('object')
          res.body.event.should.have.property('id');
          res.body.event.should.have.property('name');
          res.body.event.should.have.property('eventType');
          res.body.event.should.have.property('dateBegin');
          res.body.event.should.have.property('dateEnd');
          res.body.event.should.have.property('centerName');
          res.body.event.should.have.property('description');
          done(err);
        })
    });

    it('should test for valid entries in a single added event', (done) => {

      let newEvent = {
        name: 'Wedding Anniversary',
        eventType: 'Perty',
        dateBegin: '12-May-2018',
        dateEnd: '13-May-2018',
        centerName: "Obong Calabar",
        description: "A wonderful celebration"
      }

      chai.request(app)
        .post('/api/v1/events/')
        .send(newEvent)
        .end((err, res) => {
          res.body.event.name.should.be.a('string').and.not.be.eql('null');
          res.body.event.eventType.should.be.a('string');
          res.body.event.dateBegin.should.be.a('string').and.not.be.eql(null);;
          res.body.event.dateEnd.should.be.a('string').and.not.be.eql(null);;
          res.body.event.centerName.should.be.a('string').and.not.be.eql('null');;
          res.body.event.description.should.be.a('string');
          done(err);
        })
    });

    it('should check if single events has been added successfully', (done) => {

      let newEvent = {
        name: 'Wedding Anniversary',
        eventType: 'Perty',
        dateBegin: '12-May-2018',
        dateEnd: '13-May-2018',
        centerName: "Obong Calabar",
        description: "A wonderful celebration"
      }

      chai.request(app)
        .post('/api/v1/events/')
        .send(newEvent)
        .end((err, res) => {
          res.should.be.json;
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.message.should.be.equal("Successfully created.");
          done(err);
        })
    });

  });

  // PUT Requests
  describe('PUT Requests', () => {
    it('should update a single event property', (done) => {

      let newData = {
        name: "Mashup Party"
      }

      chai.request(app)
        .put('/api/v1/events/1')
        .send(newData)
        .end((err, res) => {
          res.body.event.name.should.be.equal(newData.name);
          done(err);
        });
    });

    it('should update multiple parameters of an event', (done) => {

      let newData = {
        name: 'Meeting',
        eventType: 'Meeting',
        centerName: "Marina, Calabar",
      }

      chai.request(app)
        .put('/api/v1/events/1')
        .send(newData)
        .end((err, res) => {
          res.body.event.name.should.be.a('string').and.to.equal(newData.name);
          res.body.event.eventType.should.be.a('string').and.to.equal(newData.eventType);
          res.body.event.centerName.should.be.a('string').and.to.equal(newData.centerName);
          done(err);
        });
    });

    it('should confirm update', (done) => {

      let newData = {
        name: 'Meeting',
        eventType: 'Meeting',
        centerName: "Marina, Calabar",
      }

      chai.request(app)
        .put('/api/v1/events/3')
        .send(newData)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('message').and.to.equal('Update successful.');
          res.body.should.have.property('error').and.to.equal(false);
          res.body.should.have.property('event').and.to.be.a('object');
          done(err);
        });
    });

    it('should test that the property and their types are the same after update', (done) => {

      let newData = {
      }

      chai.request(app)
        .put('/api/v1/events/2')
        .send(newData)
        .end((err, res) => {
          res.body.event.should.have.property('name').and.be.a('string');
          res.body.event.should.have.property('eventType').and.be.a('string');
          res.body.event.should.have.property('dateBegin').and.be.a('string');
          res.body.event.should.have.property('dateBegin').and.be.a('string');
          res.body.event.should.have.property('centerName').and.be.a('string');
          res.body.event.should.have.property('description').and.be.a('string');
          done(err);
        });
    });
  });

  // DELETE Requests
  describe('DELETE Requests', () => {

    it('should delete a single event', () => {
      chai.request(app)
        .delete('/api/v1/centers/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.to.equal('Center deleted');
          done();
        });
    });
  });

});


// TESTS FOR BAD REQUESTS
describe('INVALID HTTP REQUESTS', () => {

  describe('Invalid URL', () => {

    it('should return a 404 for invalid url on GET', () => {
      chai.request(app)
        .get('/invalid-url')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property('error');
          res.body.error.should.have.property('name');
          res.body.error.should.have.property('message');
          res.body.error.name.should.equals('Error');
          res.body.error.message.should.equal('Invalid URL Request');
        });
      });

    it('should return a 404 for invalid url on POST', () => {
      chai.request(app)
        .post('/invalid-url')
        .send({
            name: 'Wedding Anniversary',
            eventType: 'Perty',
            dateBegin: '12-May-2018',
            dateEnd: '13-May-2018',
            centerName: "Obong Calabar",
            description: "A wonderful celebration"
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property('error');
          res.body.error.should.have.property('name');
          res.body.error.should.have.property('message');
          res.body.error.name.should.equal('Error');
          res.body.error.message.should.equal('Invalid URL Request');
        });
    });
    it('should return a 404 for invalid url on PUT', () => {
      chai.request(app)
        .put('/invalid-url')
        .send({
          name: 'Wedding Anniversary',
          eventType: 'Perty',
          dateBegin: '12-May-2018',
          dateEnd: '13-May-2018',
          centerName: "Obong Calabar",
          description: "A wonderful celebration"
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property('error');
          res.body.error.should.have.property('name');
          res.body.error.should.have.property('message');
          res.body.error.name.should.equal('Error');
          res.body.error.message.should.equal('Invalid URL Request');
        });
    });
    it('should return a 404 for invalid url on DELETE', () => {
      chai.request(app)
        .delete('/invalid-url')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property('error');
          res.body.error.should.have.property('name');
          res.body.error.should.have.property('message');
          res.body.error.name.should.equal('Error');
          res.body.error.message.should.equal('Invalid URL Request');
        });
    });
  });

  describe('Invalid GET requests', () => {

    it('should return a 404 for non-existent id for an event', (done) => {
      chai.request(app)
        .get('/api/v1/centers/12')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.message.should.be.equal('Center not found.');
          done();
        });
    });

    it('should return a 404 for non-existent id for a center', (done) => {
      chai.request(app)
        .get('/api/v1/events/12')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.message.should.be.equal('Event not found.');
          done();
        });
    });
  });

  describe('Invalid POST requests', () => {

    it('should return a 400 for missing content in center body', (done) => {
      chai.request(app)
        .post('/api/v1/centers/')
        .send({
          name: "",
          location: "Old Ikang, Calabar",
          capacity: 50
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.be.equal('Invalid request.');
          done();
        });
    });

    it('should return a 400 for missing content in body of event', (done) => {
      chai.request(app)
        .post('/api/v1/centers/')
        .send({
          name: "Birthday Wishes",
          centerName: "Mayfair Lounge",
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.be.equal('Invalid request.');
          done();
        });
    });
  });

  describe('Invalid PUT requests', () => {

    it('should return a 404 for non-existent center', (done) => {
      chai.request(app)
        .put('/api/v1/centers/12')
        .send({
          name: "Mayfair Lounge",
          location: "Old Ikang, Calabar",
          capacity: 50
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.message.should.be.equal('Center not found.');
          done();
        });
    });

    it('should return a 404 for non-existent event', (done) => {
      chai.request(app)
        .put('/api/v1/events/12')
        .send({
          name: "Birthday Wishes",
          centerName: "Mayfair Lounge",
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.message.should.be.equal('Event not found.');
          done();
        });
    });
  });

  describe('Invalid DELETE requests', () => {

    it('should return a 404 for non-existent center', (done) => {
      chai.request(app)
        .delete('/api/v1/centers/15')
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(404);
          res.body.message.should.be.equal('Center not found.'); //Uncaught type error
          res.body.error.should.be.equal(true);
          done();
        });
    });

    it('should return a 404 for non-existent event', (done) => {
      chai.request(app)
        .delete('/api/v1/events/12')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.message.should.be.equal('Event not found.');
          done();
        });
    });
  });
});
