

const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = 400) => defaultResponse({
  error: message,
  status: statusCode,
}, statusCode);


class EventController {
  constructor(Events) {
    this.Events = Events;
  }


  createEvent(req) {
    return this.Events
      .findOrCreate({
        where: {
          eventName: req.body.eventName,
          dateBegin: new Date(req.body.dateBegin),
        },
        defaults: {
          eventType: req.body.eventType,
          bookingStatus: req.body.bookingStatus,
          dateEnd: new Date(req.body.dateEnd),
          userId: req.body.userId,
          centerId: req.body.centerId,
        },
      })
      .then(event => defaultResponse(event, 201));
  }

  getAllEvents() {
    return this.Events
      .findAll({})
      .then((events) => {
        if (events.length > 0) {
          return defaultResponse(events);
        }
        return errorResponse('no events available', 404);
      })
      .catch(error => errorResponse(error.message));
  }

  getEventById(params) {
    return this.Events.findOne({
      where: params,
    })
      .then(events => defaultResponse(events))
      .catch(error => errorResponse(error.message));
  }

  updateEvent(data, params) {
    return this.Events.update(data, {
      where: params,
    })
      .then(events => defaultResponse(events))
      .catch(error => errorResponse(error.message, 422));
  }

  deleteEvent(params) {
    return this.Events
      .destroy({
        where: params,
      })
      .then(result => defaultResponse(result, 204))
      .catch(error => errorResponse(error.message, 422));
  }
}

export default EventController;

