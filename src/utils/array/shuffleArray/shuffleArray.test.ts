import { shuffleArray } from './shuffleArray';

describe('shuffleArray', () => {
  it('should shuffle the elements of the array randomly', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffleArray(arr);

    expect(shuffledArr).toEqual(arr);
    
  });

  it('should return an empty array if input is an empty array', () => {
    const arr: any[] = [];
    const shuffledArr = shuffleArray(arr);

    expect(shuffledArr).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const arrCopy = [...arr];
    shuffleArray(arr);

    expect(arr).toEqual(arrCopy);
  });
});