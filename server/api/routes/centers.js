import express from 'express';
import centerController from '../controllers/centers';

const router = express.Router();

router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Centers API!',
}));

router.get('/centers', centerController.listAllCenters);
router.post('/centers', centerController.createCenter);

export default router;