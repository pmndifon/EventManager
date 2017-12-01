import models from '../models';

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
        return Centers
            .create({
                centerName: req.body.centerName,
                location: req.body.location,
                capacity: req.body.capacity,
                cost: req.body.cost,
                userId: req.body.userId,
            })
            .then(center => res.status(201).send(center))
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
            .all()
            .then(centers => res.status(200).send(centers))
            .catch(error => res.status(400).send(error));
    }
}


export default CenterController;
