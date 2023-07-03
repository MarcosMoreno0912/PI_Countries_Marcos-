const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const allowedContinents = ['África','Africa','América del Norte', 'America del Norte', 'América Central','America Central', 'América del Sur', 'America del Sur', 'Asia', 'Europa', 'Oceanía', 'Oceania', 'Antártida', 'Antartida'];
  sequelize.define('Country', {
    Id: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Flag: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Continent: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isIn: {
          args: [allowedContinents],
          msg: 'El continente especificado no es válido.',
        },
      },
    },
    Capital: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Subregión: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Population: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  }, {
    timestamps: false
  });
};