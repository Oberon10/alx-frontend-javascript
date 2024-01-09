export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);

  // checking if position outside range
  if (position >= length) throw new Error('Position outside range');
  // here new value is set to a desired position
  dv.setInt8(position, value);

  return dv;
}
