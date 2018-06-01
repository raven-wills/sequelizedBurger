module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define(
    "burger",
    {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false
    }
  );
  return burger;
};
