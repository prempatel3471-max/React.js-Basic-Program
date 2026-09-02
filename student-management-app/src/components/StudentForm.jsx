import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course || !age) {
      alert("Please fill all fields!");
      return;
    }

    addStudent({ name, course, age });
    setName("");
    setCourse("");
    setAge("");
  };

  return (
    <div className="form-box">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Student Name" value={name}
          onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Enter Course" value={course}
          onChange={(e) => setCourse(e.target.value)} />
        <input type="number" placeholder="Enter Age" value={age}
          onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;