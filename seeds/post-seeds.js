const {User, Post } = require('../models');

const postdata = [
  {
    title: 'Full stack for you',
    content: 'Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'HTML for the win',
    content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 8
  },
  {
    title: 'How to use the DOM',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'The Sequelizer',
    content: 'Nunc purus.',
    user_id: 4
  },
  {
    title: 'Mongo Bongo',
    content: 'Pellentesque eget nunc.',
    user_id: 7
  },
  {
    title: 'Web Dev',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4
  },
  {
    title: 'CSS pro',
    content: 'In hac habitasse platea dictumst.',
    user_id: 1
  },
  {
    title: 'Javascript vs Java',
    content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1
  },
  {
    title: 'Learn Ruby',
    content: 'Duis ac nibh.',
    user_id: 9
  },
  {
    title: 'Not MySQL',
    content: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
