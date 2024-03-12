export default function getStudentIdsSum(arr) {
  const combo = arr.reduce((total, student) => total + student.id, 0);
  return combo;
}
