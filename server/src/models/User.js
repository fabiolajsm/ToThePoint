const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            UserName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            Email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            Password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Profile_Picture: {
                type: DataTypes.TEXT,
                allownull: true,
                defaultValue: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
            }
        },
        { timestamps: false }
    )
}