export default function appendToEachArrayValue(array, appendString) {
  const NewArray = [];

  for (const value of array) {
    const ar = appendString + value;
    NewArray.push(ar);
  }

  return NewArray;
}
