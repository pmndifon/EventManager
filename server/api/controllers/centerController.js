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
        return res.json({
            centers: centerdb,
            error: false
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
                return res.json({
                    message: centerdb[i],
                    error: false
                });
            }
        }
        return res.status(404).json({
            message: "Center not Found",
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
            return res.json({
                message: centerdb,
                error: true
            });
        }
        const newId = centers.length + 1;
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
        return res.json({
            message: "success",
            error: false,
            center: centerdb
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
                centerdb[i].name = req.body.name || centerdb[i].name;
                centerdb[i].capacity = req.body.capacity || centerdb[i].capacity;
                centerdb[i].centerType = req.body.centerType || centerdb[i].centerType;
                centerdb[i].location = req.body.location || centerdb[i].location;
                centerdb[i].facilities = req.body.facilities || centerdb[i].facilities;
                centerdb[i].description = req.body.description || centerdb[i].description;

                return res.json({
                    message: "Success",
                    error: false,
                    center: centerdb
                });
            }
        }
        return res.status(404).json({
            message: "Center not Found",
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
        for (let i = 0; i < centers.length; i++) {
            if (centers[i].id === parseInt(req.params.id, 10)) {
                centers.splice(i, 1);
                return res.json({
                    message: "Center Deleted",
                    error: false
                });
            }
        }
        return res.status(404).json({
            message: "Center not Found",
            error: true
        });
    }

}

export default centerController;