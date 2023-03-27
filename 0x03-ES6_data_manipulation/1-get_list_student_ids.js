export default function getListStudentIds(array) {
  const arrays = [
    { id: 1, name: 'Guillaume', location: 'San Francisco' },
    { id: 2, name: 'James', location: 'Columbia' },
    { id: 5, name: 'Serena', location: 'San Francisco' },
  ];
  if (!(Array.isArray(array))) {
    return [];
  }
  return arrays.map((arraylist) => (arraylist.id));
}
