import eventdb from '../models/eventdb';

class eventController {
	/**
	 * 
	 * 
	 * Get All Events
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns All the events in db
	 * @memberof centerController
	 */
	static getAllEvents(req, res) {
		return res.status(200).send({
			message: "Successful.",
			events: eventdb
		});
	}


	/**
	 * 
	 * 
	 * @static Get a single event
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns A single event
	 * @memberof eventController
	 */
	static getSingleEvent(req, res) {
		for (let i = 0; i < eventdb.length; i++) {
			if (eventdb[i].id === parseInt(req.params.id, 10)) {
				return res.status(200).send({
					message: "Successful.",
					event: eventdb[i]
				});
			}
		}
		return res.status(404).send({
			message: "Event not found.",
			error: true
		});
	}

	/**
	 * 
	 * 
	 * @static Creates a new event
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns Success message with the list of events
	 * @memberof eventController
	 */
	static postEvent(req, res) {
		if ((!req.body.name) || (!req.body.centerName) || (!req.body.dateBegin) | (!req.body.dateEnd)) {
			return res.status(400).send({
				message: "Invalid request.",
				error: true
			});
		}

		const newId = eventdb.length;
		const name = req.body.name;
		const occasions = req.body.eventType;
		const begins = req.body.dateBegin;
		const ends = req.body.dateEnd;
		const center = req.body.centerName;
		const description = req.body.description;

		eventdb.push({
			id: newId,
			name: name,
			eventType: occasions,
			dateBegin: begins,
			dateEnd: ends,
			centerName: center,
			description: description
		});
		return res.status(201).send({
			message: "Successfully created.",
			event: eventdb[newId],
			error: false
		});
	}

	/**
	 * 
	 * 
	 * @static Update an event
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns message and list of events as the case may be
	 * @memberof eventController
	 */
	static updateEvent(req, res) {
		for (let i = 0; i < eventdb.length; i++) {
			if (eventdb[i].id === parseInt(req.params.id, 10)) {
				eventdb[i].name = req.body.name || eventdb[i].name;
				eventdb[i].eventType = req.body.eventType || eventdb[i].eventType;
				eventdb[i].dateBegin = req.body.dateBegin || eventdb[i].dateBegin;
				eventdb[i].dateEnd = req.body.dateEnd || eventdb[i].dateEnd;
				eventdb[i].centerName = req.body.centerName || eventdb[i].centerName;
				eventdb[i].description = req.body.description || eventdb[i].description;

				return res.status(200).send({
					message: "Update successful.",
					error: false,
					event: eventdb[i]
				});
			}
		}
		return res.status(404).send({
			message: "Event not found.",
			error: true
		});
	}

	/**
	 * 
	 * 
	 * @static Delete an Event
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns  
	 * @memberof eventController
	 */
	static deleteEvent(req, res) {
		for (let i = 0; i < eventdb.length; i++) {
			if (eventdb[i].id === parseInt(req.params.id, 10)) {
				eventdb.splice(i, 1);
				return res.status(200).send({
					message: "Event deleted.",
					error: false
				});
			}
		}
		return res.status(404).send({
			message: "Event not found.",
			error: true
		});
	}

}

export default eventController;