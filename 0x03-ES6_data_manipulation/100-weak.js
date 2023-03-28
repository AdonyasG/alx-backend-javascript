// Create a new WeakMap instance
const weakMap = new WeakMap();

// Export the weakMap
export { weakMap };

// Define the queryAPI function
export default function queryAPI(endpoint) {
  // Check if the endpoint has been queried before
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    // Increment the number of times the endpoint has been queried
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Throw an error if the endpoint has been queried 5 or more times
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
