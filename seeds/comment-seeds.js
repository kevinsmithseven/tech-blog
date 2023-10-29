const { Comment } = require('../models');

const commentData = [
  {
    content: 'This is a comment on the first blog post.',
    user_id: 1,
    blogpost_id: 1,
  },
  {
    content: 'This is another comment on the first blog post.',
    user_id: 2,
    blogpost_id: 1,
  },
  {
    content: 'This is a comment on the second blog post..',
    user_id: 1,
    blogpost_id: 2,
  },
  {
    content: 'This is another comment on the second blog post.',
    user_id: 2,
    blogpost_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;