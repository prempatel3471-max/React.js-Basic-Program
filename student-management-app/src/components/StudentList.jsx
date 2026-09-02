function StudentList({ students, deleteStudent }) {
  return (
    <div className="student-box">
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <div className="student-list">
          {students.map((student) => (
            <div className="student-card" key={student.id}>
              <div>
                <h3>{student.name}</h3>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Age:</strong> {student.age}</p>
              </div>
              <button className="delete-btn" onClick={() => deleteStudent(student.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;