const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Blogpost extends Model { }

Blogpost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
            type: INTEGER,
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
    }
)

