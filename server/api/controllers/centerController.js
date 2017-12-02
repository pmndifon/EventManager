const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = 400) => defaultResponse({
  error: message,
  status: statusCode,
}, statusCode);


class CenterController {
  constructor(Centers) {
    this.Centers = Centers;
  }

  // CREATE
  createCenter(req) {
    return this.Centers
      .findOrCreate({
        where: {
          centerName: req.body.centerName,
        },
        defaults: {
          location: req.body.location,
          capacity: req.body.capacity,
          cost: req.body.cost,
          userId: req.body.Us,
        },
      })
      .then(center => defaultResponse(center, 201))
      .catch(error => errorResponse(error.message));
  }

  // READ MANY
  getAllCenters() {
    return this.Centers
      .findAll({})
      .then((centers) => {
        if (centers.length > 0) {
          return defaultResponse(centers);
        }
        return errorResponse('no centers available', 404);
      })
      .catch(error => errorResponse(error.message));
  }

  // READ ONE
  getCenterById(params) {
    return this.Centers.findOne({
      where: params,
    })
      .then((center) => {
        if (!center) {
          return errorResponse('Center not found', 404);
        }
        return defaultResponse(center);
      })
      .catch(error => errorResponse(error.message));
  }

  updateCenter(data, params) {
    return this.Centers.update(data, {
      where: params,
    })
      .then(center => defaultResponse(center))
      .catch(error => errorResponse(error.message, 422));
  }

  deleteCenter(params) {
    return this.Centers
      .destroy({
        where: params,
      })
      .then(result => defaultResponse(result, 204))
      .catch(error => errorResponse(error.message, 422));
  }
}

export default CenterController;

