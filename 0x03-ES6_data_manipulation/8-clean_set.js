export default function cleanSet(theSet, startString) {
  let h = 0;
  let string = '';

  if (startString.length === 0) {
    return '';
  }

  for (const element of theSet) {
    h += 1;
    if (element.startsWith(startString)) {
      string += element.slice(3);
      if (h !== theSet.size - 1) {
        string += '-';
      }
    }
  }
  return string;
}
