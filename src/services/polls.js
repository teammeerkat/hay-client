export const getPolls = () => {
  return Promise.resolve([
    { question:'Spiders or Snakes?', _id: 1, options:['spiders', 'snakes'] },
    { question:'Spiders or Snakes?', _id: 2, options:['spiders', 'snakes'] },
    { question:'Spiders or Snakes?', _id: 3, options:['spiders', 'snakes'] },
    { question:'Spiders or Snakes?', _id: 4, options:['spiders', 'snakes'] },
    { question:'Spiders or Snakes?', _id: 5, options:['spiders', 'snakes'] },
  ]);
};
