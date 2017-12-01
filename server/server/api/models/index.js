
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configs from '../config/config.json';

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = configs[env]
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Load Models
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let model = sequelize.import(path.join(__dirname, '../models', file));
    db[model.name] = model;
  });

// Associate Models
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
