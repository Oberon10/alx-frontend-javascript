function getStudentsByLocation(students, city) {
  // Use the filter function to get students in the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  // Return the array of students in the specified city
  return studentsInCity;
}

// Export the function to make it accessible from other modules
export default getStudentsByLocation;
