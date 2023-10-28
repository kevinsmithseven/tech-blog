const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogpost extends Model { }

Blogpost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost',
        // timestamps: true,
    }
)

module.exports = Blogpost;