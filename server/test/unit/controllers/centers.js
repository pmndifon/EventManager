import CenterController from '../../../api/controllers/centerController';

describe('Center Controllers', () => {
  describe('getAllCenters()', () => {
    it('shoulld return a list of centers', () => {
      const Centers = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        centerName: 'Wembelton',
        location: 'Atimbo, Calabar',
        capacity: 1500,
        cost: 100000.00,
        userId: 5,
      },
      {
        id: 2,
        centerName: 'Wembelton',
        location: 'Atimbo, Calabar',
        capacity: 1500,
        cost: 100000.00,
        userId: 5,
      }];

      td.when(Centers.findAll({})).thenResolve(expectedResponse);

      const centerController = new CenterController(Centers);
      return centerController.getAllCenters()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('getCenterById()', () => {
    it('should return a center', () => {
      const Centers = {
        findOne: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        centerName: 'Wembelton',
        location: 'Atimbo, Calabar',
        capacity: 1500,
        cost: 100000.00,
        userId: 5,
      }];

      td.when(Centers.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const centerController = new CenterController(Centers);
      return centerController.getCenterById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('createCenter()', () => {
    it('should create a center', () => {
      const Centers = {
        create: td.function(),
      };

      const requestBody = {
        id: 1,
        centerName: 'Wembelton',
        location: 'Atimbo, Calabar',
        capacity: 1500,
        cost: 100000.00,
        userId: 5,
      };

      const expectedResponse = [{
        id: 1,
        centerName: 'Wembelton',
        location: 'Atimbo, Calabar',
        capacity: 1500,
        cost: 100000.00,
        userId: 5,
      }];

      td.when(Centers.create(requestBody)).thenResolve(expectedResponse);

      const centerController = new CenterController(Centers);
      return centerController.createCenter(requestBody)
        .then((response) => {
          expect(response.statusCode).to.be.eql(201);
          expect(response.data).to.be.eql(expectedResponse);
        });
    });
  });

  describe('updateCenter()', () => {
    it('should update a center', () => {
      const Centers = {
        update: td.function(),
      };

      const requestBody = {
        id: 1,
        centerName: 'Wembelton',
        location: 'Bayelsa',
        capacity: 1500,
        cost: 100000.00,
        userId: 5,
      };

      const expectedResponse = [{
        id: 1,
        centerName: 'Wembelton',
        location: 'Bayelsa',
        capacity: 1500,
        cost: 100000.00,
        userId: 5,
      }];

      td.when(Centers.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

      const centerController = new CenterController(Centers);
      return centerController.updateCenter(requestBody, { id: 1 })
        .then(response =>
          expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('deleteCenter()', () => {
    it('should delete a center', () => {
      const Centers = {
        destroy: td.function(),
      };

      td.when(Centers.destroy({ where: { id: 1 } })).thenResolve({});

      const centerController = new CenterController(Centers);
      return centerController.deleteCenter({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});
