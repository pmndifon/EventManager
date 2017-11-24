import express, { Router } from 'express';
import { index } from './controllers/movies';


// Initialize the router
const router = Router();

// Handle /centers.json route with index action from center controller
router.route('/center')
  .get(centerController.getAllCenters);

export default router;