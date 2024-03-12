export default function updateStudentGradeByCity(arr, city, newGrade) {
  const studentsCity = arr.filter((student) => student.location === city);
  return studentsCity.map((student) => {
    const newStudent = { ...student };
    const allGrade = newGrade.filter((grade) => student.id === grade.studentId);
    if (allGrade.length === 0) {
      newStudent.grade = 'N/A';
    } else {
      newStudent.grade = allGrade[0].grade;
    }
    return newStudent;
  });
}
