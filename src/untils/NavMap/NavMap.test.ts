import { navMap } from "./NavMap";

describe('Create class', () => {
  test('Should be created', () => {
    expect(navMap).not.toBe(undefined);
  });
});

describe('Check class methods', () => {
  test('Should return clear string', () => {
    expect(navMap.home()).toBe('/');
  });

  test('Should return lobby path', () => {
    expect(navMap.lobby()).toBe('/lobbies/:id');
  });

  test('Should return game path', () => {
    expect(navMap.game()).toBe('/games/:id');
  });
});
