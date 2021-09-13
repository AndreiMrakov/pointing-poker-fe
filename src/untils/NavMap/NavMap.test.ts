import { navMap } from "@/untils/NavMap";

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
    expect(navMap.lobby()).toBe('/lobby/:id');
  });

  test('Should return game path', () => {
    expect(navMap.game()).toBe('/game/:id');
  });
});
