
export default (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    eventName: DataTypes.STRING,
    eventType: DataTypes.STRING,
    dateBegin: DataTypes.DATEONLY,
    dateEnd: DataTypes.DATEONLY,
    bookingStatus: DataTypes.INTEGER,
  });

  // / Relations
  Events.associate = (models) => {
    // 1 to Many with Users
    Events.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  // 1 to Many with Centers
  Events.associate = (models) => {
    Events.belongsTo(models.Centers, {
      foreignKey: 'centerId',
    });
  };
  return Events;
};
