const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

Blogpost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

Blogpost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'SET NULL',
});

Comment.belongsTo(Blogpost, {
    foreignKey: 'blogpost_id',
    onDelete: 'SET NULL',
});

module.exports = { User, Blogpost, Comment };