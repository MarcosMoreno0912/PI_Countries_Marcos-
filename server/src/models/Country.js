const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const allowedContinents = ['África','Africa','América del Norte', 'America del Norte', 'América Central','America Central', 'América del Sur', 'America del Sur', 'Asia', 'Europa', 'Oceanía', 'Oceania', 'Antártida', 'Antartida'];
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    flag: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continent: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isIn: {
          args: [allowedContinents],
          msg: 'El continente especificado no es válido.',
        },
      },
    },
    capital: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        const valor = this.getDataValue('area');
        return valor ? `${valor} km²` : null;
      },
    },
    population: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }, 
  }, 
    {
    timestamps: false
  });
};