const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "room",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            Name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Icon: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "picture"
            }
        },
        { timestamps: true }
    )
}