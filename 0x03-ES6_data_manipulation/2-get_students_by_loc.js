export default function getStudentsByLocation(arr, city) {
  return arr.filter((currentElement) => currentElement.location === city);
}
