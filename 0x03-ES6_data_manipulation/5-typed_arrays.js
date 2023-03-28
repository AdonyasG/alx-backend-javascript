export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  // Check if position is within the bounds of the buffer
  if (position < 0 || position >= view.byteLength) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  return {
    byteLength: view.byteLength,
    byteOffset: view.byteOffset,
    buffer,
  };
}
