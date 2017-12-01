import models from '../models/centers';

const Centers = models.Centers;


class CenterController {
  /**
   *
   *
   * @static
   * @param {any} res
   * @param {any} req
   * @memberof CenterController
   */
  static createCenter(res, req) {
    Centers
      .create({
        name: req.body.title,
        location: req.body.location,
        capacity: req.body.capacity,
        cost: req.body.cost,
        userId: req.body.userId,
      })
      .then(centers => res.status(201).json(centers))
      .catch(error => res.status(400).send(error));
  }
  /**
   *
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns
   * @memberof CenterController
   */
  static listAllCenters(req, res) {
    return Centers
      .findAll()
      .then(centers => console.log(users))
}


export default CenterController;
