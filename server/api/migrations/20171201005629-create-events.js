
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
      centerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Centers',
          key: 'id',
          as: 'centerId',
        },
      },
      eventName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eventType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bookingStatus: {
        type: Sequelize.INTEGER,
        default: 0,
      },
      dateBegin: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      dateEnd: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Events'),
};
