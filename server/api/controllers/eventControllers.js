const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = 400) => defaultResponse({
  error: message,
}, statusCode);


class EventController {
  constructor(Events) {
    this.Events = Events;
  }

  createEvent(data) {
    return this.Events
      .create(data)
      .then(events => defaultResponse(events, 201))
      .catch(error => errorResponse(error.message, 422));
  }

  getAllEvents() {
    return this.Events.findAll({})
      .then(events => defaultResponse(events))
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

