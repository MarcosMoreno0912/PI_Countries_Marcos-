const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	validate: {
    		min: 1,
    		max: 5,
        isOdd(value) {
          if(value < 1 || value > 5) {
            throw new Error('Sólo se admiten valores entre 1 y 5 inclusive.');
          }
        },
    	},
    },
    duration: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
      validate: {
        min: 1,
        max: 24,
        isOdd(value) {
          if(value < 1 || value > 24) {
            throw new Error('Inserte una duración entre 1 y 24hs');
          }
        },
      },
    },
    season: {
    	type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
    	allowNull: false,
    },
  }, {
  	timestamps: false
  });
};