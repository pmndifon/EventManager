const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = 400) => defaultResponse({
  error: message,
}, statusCode);


class CenterController {
  constructor(Centers) {
    this.Centers = Centers;
  }

  createCenter(data) {
    return this.Centers
      .create(data)
      .then(center => defaultResponse(center, 201))
      .catch(error => errorResponse(error.message, 422));
  }

  getAllCenters() {
    return this.Centers.findAll({})
      .then(centers => defaultResponse(centers))
      .catch(error => errorResponse(error.message));
  }

  getCenterById(params) {
    return this.Centers.findOne({
      where: params,
    })
      .then(center => defaultResponse(center))
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

