import "./teachers.css"

export default async function TeacherPage() {

  const res = await fetch("http://localhost:3000/api/getTeachers");
  const text = await res.text();
  const teachers = await JSON.parse(text);

  return (
    <>
      {teachers.map((teacher) => (
        <div key={teacher.id}>
          <h2 style={{backgroundColor:"beige" , marginRight:"30px"}}>Teacher name: {teacher.name}</h2>
          <hr></hr>
          <p style={{backgroundColor:"bisque"}}> Subject: {teacher.subject}</p>
        </div>
      ))}
    </>
  );
}
