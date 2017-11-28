import centerdb from '../models/centerdb';

class centerController {
	/**
	 * 
	 * 
	 * Get All Centers
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns All the center in db
	 * @memberof centerController
	 */
	static getAllCenters(req, res) {
		return res.status(200).send({
			message: "Successful.",
			centers: centerdb
		});
	}

	/**
	 * 
	 * 
	 * @static Get a single center
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns A single center
	 * @memberof centerController
	 */
	static getSingleCenter(req, res) {
		for (let i = 0; i < centerdb.length; i++) {
			if (centerdb[i].id === parseInt(req.params.id, 10)) {
				return res.status(200).send({
					message: "Successful.",
					center: centerdb[i]
				});
			}
		}
		return res.status(404).send({
			message: "Center not found.",
			error: true
		});
	}

	/**
	 * 
	 * 
	 * @static Creates a new center
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns Success message with the list of centers
	 * @memberof centerController
	 */
	static postCenter(req, res) {
		
		if ((!req.body.name) || (!req.body.location) || (!req.body.facilities)) {
			return res.status(400).send({
				message: "Invalid request.",
				error: true
			});
		}

		const newId = centerdb.length;
		const name = req.body.name;
		const capacity = req.body.capacity;
		const centerType = req.body.centerType;
		const location = req.body.location;
		const facilities = req.body.facilities;
		const description = req.body.description;

		centerdb.push({
			id: newId,
			name: name,
			capacity: capacity,
			centerType: centerType,
			location: location,
			facilities: facilities,
			description: description
		});
		return res.status(201).send({
			message: "Successfully created.",
			center: centerdb[newId],
			error: false
		});
	}

	/**
	 * 
	 * 
	 * @static Update a center
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns message and list of centers as the case may be
	 * @memberof centerController
	 */
	static updateCenter(req, res) {
		for (let i = 0; i < centerdb.length; i++) {
			if (centerdb[i].id === parseInt(req.params.id, 10)) {

				// Validator needed here

				centerdb[i].name = req.body.name || centerdb[i].name;
				centerdb[i].capacity = req.body.capacity || centerdb[i].capacity;
				centerdb[i].centerType = req.body.centerType || centerdb[i].centerType;
				centerdb[i].cost = req.body.cost || centerdb[i].cost;
				centerdb[i].location = req.body.location || centerdb[i].location;
				centerdb[i].facilities = req.body.facilities || centerdb[i].facilities;
				centerdb[i].description = req.body.description || centerdb[i].description;

				return res.status(200).send({
					message: "Update successful.",
					error: false,
					center: centerdb[i]
				});
			}
		}
		return res.status(404).send({
			message: "Center not found.",
			error: true
		});
	}

	/**
	 * 
	 * 
	 * @static Delete a Center
	 * @param {obj} req 
	 * @param {obj} res 
	 * @returns  
	 * @memberof centerController
	 */
	static deleteCenter(req, res) {
		for (let i = 0; i < centerdb.length; i++) {
			if (centerdb[i].id === parseInt(req.params.id, 10)) {
				centerdb.splice(i, 1);
				return res.status(200).send({
					message: "Center deleted.",
					error: false
				});
			}
		}
		return res.status(404).send({
			message: "Center not found.",
			error: true
		});
	}

}

export default centerController;