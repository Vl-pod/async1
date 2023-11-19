import GameSavingLoader from '../GameSavingLoader';

test('load method returns the correct GameSaving object', async () => {
  const saving = await GameSavingLoader.load();
  expect(saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
