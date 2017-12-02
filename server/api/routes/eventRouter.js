import EventController from '../controllers/eventControllers';

export default (app) => {
  const eventController = new EventController(app.datasource.Events);

  app.route('/events')
    .get((req, res) => {
      eventController.getAllEvents()
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req, res) => {
      eventController.createEvent(req.body)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/events/:id')
    .get((req, res) => {
      eventController.getEventById(req.params)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .put((req, res) => {
      eventController.updateEvent(req.body, req.params)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .delete((req, res) => {
      eventController.deleteEvent(req.params)
        .then((response) => {
          res.sendStatus(response.statusCode);
        });
    });
};
