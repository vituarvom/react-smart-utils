
import { renderHook, act } from '@testing-library/react-hooks';
import useWindowReSize from './WindowReSize';

describe('useWindowReSize hook', () => {
 
  const resizeWindow = (width: number, height: number) => {
    act(() => {
      window.innerWidth = width;
      window.innerHeight = height;
      window.dispatchEvent(new Event('resize'));
    });
  };

  beforeEach(() => {
    window.innerWidth = 1024;
    window.innerHeight = 768;
  });

  afterEach(() => {
    // Reset window dimensions after each test
    window.innerWidth = 1024;
    window.innerHeight = 768;
  });

  it('should return the initial window size', () => {
    const { result } = renderHook(() => useWindowReSize());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  it('should update width and height on window resize', () => {
    const { result } = renderHook(() => useWindowReSize());

    resizeWindow(800, 600);

    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(600);
  });
});
