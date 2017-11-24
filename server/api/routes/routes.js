import express, { Router } from 'express';
import centerController from '../controllers/centerController';
import eventController from '../controllers/eventController';


// Initialize the router
const router = Router();

// Route to get all all centers
router.route('/centers')
  .get(centerController.getAllCenters) // Route to get all centers
  .post(centerController.postCenter); // Route to add a new center

router.route('/centers/:id')
  .get(centerController.getSingleCenter) // Route to get center by :id
  .put(centerController.updateCenter);  // Route to update single center

router.route('/events')
  .get(eventController.getAllEvents) // Route to get all events
  .post(eventController.postEvent); // Route to get events by id

router.route('/events/:id')  
  .get(eventController.getSingleEvent)  // Route to get single event
  .put(eventController.updateEvent)     //  Route to update single event
  .delete(eventController.deleteEvent); // Route to delete event

export default router;