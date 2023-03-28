export default function updateUniqueItems(maps) {
  maps.forEach((value, key) => {
    if (value === 1) {
      maps.set(key, 100);
    }
    return maps;
  });
}
