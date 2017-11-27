import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app.js';
import request from 'supertest';

let should = chai.should();

chai.use(chaiHttp);

describe('All GET request on centers', () => {
    it('should GET all centers', (done) => {
        chai.request(app)
            .get('/api/v1/centers/')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
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
                res.body.center.should.have.property('name');
                res.body.center.should.have.property('capacity');
                res.body.center.should.have.property('centerType');
                done();
            });
    });
});

describe('All POST request on centers', () => {;

    it('should add a SINGLE center on /centers POST');
    it('should update a SINGLE center on /centers/<id> PUT');
    it('should delete a SINGLE center on /centers/<id> DELETE');
});