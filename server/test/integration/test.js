describe('Routes Venues', () => {

    const defaultVenue = {
        id: 1,
        name: 'Default Venue' 
    };
    
    describe('Route GET /venues', () => {
        it('should return a list of books', done => {

            request
              .get('/venues')
              .end((err, res) => {

                expect(res.body[0].id).to.be.eql(defaultVenue.id);
                expect(res.body[0].name).to.be.eql(defaultVenue.name);

                done(err);
              });
        });
    });
});