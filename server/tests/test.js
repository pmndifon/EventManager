import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Route Venues', () => {
    const defaultVenue = {
        id: 1,
        name: 'Default Venue'
    };
});

describe('Route GET /venues', () => {
    it('should return a list of venues', done => {
        chai.request(app)
            .get('/venues')
            .end((err, res) => {

                expect(res.body[0].id).to.be.eql(defaultVenue.id);
                expect(res.body[0].name).to.be.eql(defaultVenue.name);

                done(err);
            });
    });
});