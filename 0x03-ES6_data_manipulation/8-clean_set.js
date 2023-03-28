export default function cleanSet(set, startString) {
  if (startString === '' || startString === undefined || typeof startString !== 'string' || set.size === 0) {
    return '';
  }
  const cleanedValues = Array.from(set).filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return cleanedValues.join('-');
}
