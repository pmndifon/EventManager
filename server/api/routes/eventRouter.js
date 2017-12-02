import EventController from '../controllers/eventController';
import { Events } from '../models';

export default (app) => {
  const eventController = new EventController(Events);

  app.route('/api/v1/events')
    .get((req, res) => {
      eventController.getAllEvents()
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req, res) => {
      eventController.createEvent(req)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/api/v1/events/:id')
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
