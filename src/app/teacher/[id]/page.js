import './teacher.css';

export default async function TeacherPage({ params }) {
const param = await params;
  const id = parseInt(param.id);

  const res = await fetch(`http://localhost:3000/api/teacher/${id}`, { cache: "no-store" });
  const students = await res.json();

  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <h2 style={{ backgroundColor: "beige", marginRight: "30px" }}>
            Student Name: {student.name}
          </h2>
          <hr />
          <p style={{ backgroundColor: "bisque" }}>
            TeacherId: {student.teacherId}
          </p>
        </div>
      ))}
    </>
  );
}
