export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  });

  // Relations
  Users.associate = (models) => {
    // 1 to many with Events
    Users.hasMany(models.Events, {
      foreignKey: 'userId',
    });
  };

  // Relations
  Users.associate = (models) => {
    // 1 to many with Centers
    Users.hasMany(models.Centers, {
      foreignKey: 'userId',
    });
  };

  return Users;
};
