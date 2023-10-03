export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const num = weakMap.get(endpoint);
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    weakMap.set(endpoint, num + 1);
  }

  if (num >= 5) {
    throw new Error('Endpoint load is high');
  }
}
