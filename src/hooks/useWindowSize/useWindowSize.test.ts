import { renderHook, act } from '@testing-library/react-hooks';
import useWindowSize from './useWindowSize';

describe('useWindowSize hook', () => {

  const changeWindowSize = (width: number, height: number) => {
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
    window.innerWidth = 1024;
    window.innerHeight = 768;
  });

  it('should return the initial window size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  it('should update width and height on window resize', () => {
    const { result } = renderHook(() => useWindowSize());

    changeWindowSize(800, 600);

    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(600);
  });
});