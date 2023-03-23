import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  return sizes.map((size) => new ClassRoom(size));

  // alternate way
  /**
    const size = [19, 20, 34];
  const arrays = [];

  size.forEach((element) => {
    arrays.push(new ClassRoom(element));
  });

  return arrays;
  */
}
