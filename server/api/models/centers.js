export default (sequelize, DataTypes) => {
  const Centers = sequelize.define('Centers', {
    centerName: DataTypes.STRING,
    location: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    cost: DataTypes.DECIMAL,
  });

  // Associates with user table
  Centers.associate = (models) => {
    Centers.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
  };
  return Centers;
};