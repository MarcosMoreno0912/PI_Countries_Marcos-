const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
  	id: {
  		type: DataTypes.INTEGER,
  		allowNull: false,
  		primaryKey: true,
  		autoIncrement: true,
  	},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Difficulty: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	validate: {
    		min: 1,
    		max: 5,
    	},
    },
    Duration: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    },
    Season: {
    	type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
    	allowNull: false,
    },
  }, {
  	timestamps: false
  });
};