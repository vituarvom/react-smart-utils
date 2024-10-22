import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    // Clear the localStorage before each test
    localStorage.clear();
  });

  it('should return initial value if localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'dark'));

    expect(result.current[0]).toBe('dark');
  });

  it('should return the stored value from localStorage', () => {
    localStorage.setItem('theme', JSON.stringify('light'));

    const { result } = renderHook(() => useLocalStorage('theme', 'dark'));

    expect(result.current[0]).toBe('light');
  });

  it('should update localStorage when setValue is called', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'dark'));

    act(() => {
      result.current[1]('light');
    });

    expect(result.current[0]).toBe('light');
    expect(localStorage.getItem('theme')).toBe(JSON.stringify('light'));
  });

  it('should handle functions passed to setValue', () => {
    const { result } = renderHook(() => useLocalStorage('count', 1));

    act(() => {
      result.current[1]((prev) => prev + 1);
    });

    expect(result.current[0]).toBe(2);
    expect(localStorage.getItem('count')).toBe(JSON.stringify(2));
  });

  it('should handle errors when accessing localStorage', () => {
    // Mock localStorage to throw an error
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const { result } = renderHook(() => useLocalStorage('theme', 'dark'));

    expect(result.current[0]).toBe('dark'); // Fallback to initial value
    expect(console.error).toHaveBeenCalledWith(
      'Error retrieving localStorage key "theme":',
      expect.any(Error)
    );
  });

  it('should handle errors when setting localStorage', () => {
    // Mock localStorage setItem to throw an error
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const { result } = renderHook(() => useLocalStorage('theme', 'dark'));

    act(() => {
      result.current[1]('light');
    });

    expect(result.current[0]).toBe('light');
    expect(console.error).toHaveBeenCalledWith(
      'Error setting localStorage key "theme":',
      expect.any(Error)
    );
  });
});
