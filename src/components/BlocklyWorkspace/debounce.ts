export default function debounce(func: (...args: any) => void, wait: number) {
  let timeout: number | null = null;
  let later: () => void = () => undefined;

  const debouncedFunction = (...args: any) => {
    later = () => {
      timeout = 0;
      func(...args);
    };
    timeout && window.clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
  };

  const cancel = () => {
    if (timeout !== null) {
      window.clearTimeout(timeout);
      later();
    }
  };

  return [debouncedFunction, cancel];
}