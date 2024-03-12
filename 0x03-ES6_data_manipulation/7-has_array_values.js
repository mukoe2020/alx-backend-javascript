export default function hasValuesFromArray(theSet, arr) {
  for (const element of arr) {
    if (!theSet.has(element)) {
      return false;
    }
  }
  return true;
}
