function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }
    const remainder = grade % 5;
    if (remainder >= 3) {
      return grade + (5 - remainder);
    }
    return grade;
  });
}

const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));
