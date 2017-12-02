import EventController from '../../../api/controllers/eventController';

describe('Event Controllers', () => {
  describe('getAllEvents()', () => {
    it('shoulld return a list of events', () => {
      const Events = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        userId: 2,
        eventId: 1,
        eventName: 'Blue Party',
        eventType: 'Wedding',
        bookingStatus: 'pending',
        dateBegin: '12-11-2017',
        dateEnd: '12-14-2-2017',
      },
      {
        id: 1,
        userId: 2,
        eventId: 1,
        eventName: 'Blue Party',
        eventType: 'Wedding',
        bookingStatus: 'pending',
        dateBegin: '12-11-2017',
        dateEnd: '12-14-2-2017',
      }];

      td.when(Events.findAll({})).thenResolve(expectedResponse);

      const eventController = new EventController(Events);
      return eventController.getAllEvents()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('getEventById()', () => {
    it('should return a event', () => {
      const Events = {
        findOne: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        userId: 2,
        eventId: 1,
        eventName: 'Blue Party',
        eventType: 'Wedding',
        bookingStatus: 'pending',
        dateBegin: '12-11-2017',
        dateEnd: '12-14-2-2017',
      }];

      td.when(Events.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const eventController = new EventController(Events);
      return eventController.getEventById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('createEvent()', () => {
    it('should create a event', () => {
      const Events = {
        create: td.function(),
      };

      const requestBody = {
        id: 1,
        userId: 2,
        eventId: 1,
        eventName: 'Blue Party',
        eventType: 'Wedding',
        bookingStatus: 'pending',
        dateBegin: '12-11-2017',
        dateEnd: '12-14-2-2017',
      };

      const expectedResponse = [{
        id: 1,
        userId: 2,
        eventId: 1,
        eventName: 'Blue Party',
        eventType: 'Wedding',
        bookingStatus: 'pending',
        dateBegin: '12-11-2017',
        dateEnd: '12-14-2-2017',
      }];

      td.when(Events.create(requestBody)).thenResolve(expectedResponse);

      const eventController = new EventController(Events);
      return eventController.createEvent(requestBody)
        .then((response) => {
          expect(response.statusCode).to.be.eql(201);
          expect(response.data).to.be.eql(expectedResponse);
        });
    });
  });

  describe('updateEvent()', () => {
    it('should update a event', () => {
      const Events = {
        update: td.function(),
      };

      const requestBody = {
        id: 1,
        userId: 2,
        eventId: 1,
        eventName: 'Blue Party',
        eventType: 'Wedding',
        bookingStatus: 'pending',
        dateBegin: '12-11-2017',
        dateEnd: '12-14-2-2017',
      };

      const expectedResponse = [{
        id: 1,
        userId: 2,
        eventId: 1,
        eventName: 'Blue Party',
        eventType: 'Wedding',
        bookingStatus: 'pending',
        dateBegin: '12-11-2017',
        dateEnd: '12-14-2-2017',
      }];

      td.when(Events.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

      const eventController = new EventController(Events);
      return eventController.updateEvent(requestBody, { id: 1 })
        .then(response =>
          expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('deleteEvent()', () => {
    it('should delete a event', () => {
      const Events = {
        destroy: td.function(),
      };

      td.when(Events.destroy({ where: { id: 1 } })).thenResolve({});

      const eventController = new EventController(Events);
      return eventController.deleteEvent({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});
