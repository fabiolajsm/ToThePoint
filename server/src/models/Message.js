const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "message",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            Content: {
                type: DataTypes.TEXT,
                allowNull: false,
            }, 
            IsForGroup: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false
            },
            Adj: {
                type: DataTypes.SOMETYPE,
                allowNull: true,
            },
            Seen: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false
            }
        },
        { timestamps: true }
    )
}