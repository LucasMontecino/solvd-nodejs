const { debounce } = require('../src/debounce');

jest.useFakeTimers();

describe('debounce', () => {
  let mockFn;
  let debounced;

  beforeEach(() => {
    mockFn = jest.fn();
    debounced = debounce(mockFn, 500);
  });

  it('should not call the function immediately', () => {
    debounced('test');
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should call the function once after the delay', () => {
    debounced('query');
    jest.advanceTimersByTime(500);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('query');
  });

  it('should reset the timer if called again before the delay', () => {
    debounced('a');
    jest.advanceTimersByTime(200);
    debounced('b');
    jest.advanceTimersByTime(200);
    debounced('c');

    // Still within delay, function shouldn't be called yet
    expect(mockFn).not.toHaveBeenCalled();

    // Now wait long enough
    jest.advanceTimersByTime(500);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('c'); // Only the last one
  });

  it('should call the function with the last argument only', () => {
    debounced('first');
    debounced('second');
    jest.advanceTimersByTime(500);
    expect(mockFn).toHaveBeenCalledWith('second');
  });

  it('should handle multiple independent debounced functions', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();

    const deb1 = debounce(fn1, 300);
    const deb2 = debounce(fn2, 300);

    deb1('a');
    deb2('b');

    jest.advanceTimersByTime(300);
    expect(fn1).toHaveBeenCalledWith('a');
    expect(fn2).toHaveBeenCalledWith('b');
  });
});
