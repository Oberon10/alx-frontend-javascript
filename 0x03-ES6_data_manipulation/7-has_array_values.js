export default function hasValuesFromArray(set, arr) {
  return arr.reduce((prev, curr) => && set.has(curr), true);
}export
