import CenterController from '../controllers/centerControllers';

export default (app) => {
  const centerController = new CenterController(app.datasource.Centers);

  app.route('/centers')
    .get((req, res) => {
      centerController.getAllCenters()
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req, res) => {
      centerController.createCenter(req.body)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/centers/:id')
    .get((req, res) => {
      centerController.getCenterById(req.params)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .put((req, res) => {
      centerController.updateCenter(req.body, req.params)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .delete((req, res) => {
      centerController.deleteCenter(req.params)
        .then((response) => {
          res.sendStatus(response.statusCode);
        });
    });
};
