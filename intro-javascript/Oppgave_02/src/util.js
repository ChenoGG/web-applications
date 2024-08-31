const names = [
  'Trude',
  'Simen',
  'Lars',
  'Ali',
  'Finn',
  'Kåre',
  'Hanne',
  'Åse',
  'Anne',
  'Amanda',
  'Morgan',
];

export const users = [];

const createRandomAge = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const createUsers = (userCount) => {
  for (let i = 0; i < userCount; i++) {
    const user = {
      id: i,
      name: names[i],
      age: createRandomAge(),
    };
    users.push(user);
  }
};

createUsers(11);
