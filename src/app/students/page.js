import "./students.css"

export default async function StudentsPage() {

  const res = await fetch("http://localhost:3000/api/getStudents");
  const text = await res.text();
  const students = await JSON.parse(text);

  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <h2 style={{backgroundColor:"beige" , marginRight:"30px"}}>Student Name: {student.name}</h2>
          <hr></hr>
          <p style={{backgroundColor:"bisque"}}> TeacherId: {student.teacherId}</p>
        </div>
      ))}
    </>
  );
}
