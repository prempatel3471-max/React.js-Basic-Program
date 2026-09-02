import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Prem Patel", course: "BCA", age: 20 },
    { id: 2, name: "Rahul Shah", course: "BCA", age: 21 },
  ]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <StudentForm addStudent={addStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </div>
    </div>
  );
}

export default App;