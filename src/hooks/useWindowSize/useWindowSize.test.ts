import { renderHook, act } from '@testing-library/react-hooks';
import useWindowSize from './useWindowSize';

describe('useWindowSize hook', () => {
  beforeEach(() => {
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

  
    act(() => {
      window.innerHeight = 600;
      window.innerWidth = 800;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(600);
  });
})