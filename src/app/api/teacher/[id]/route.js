import fs from "fs";
import path from "path";


export async function GET(req,{params}) {

  const param = await params;

  const teacher = param.id;
  const filePath = path.join(
    process.cwd(),
    "data",
    "users.json"
  );

  const data = JSON.parse(
    fs.readFileSync(filePath, "utf-8")
  );
const students = data.students;

const particluarData = students.filter((student)=> student.teacherId==teacher)
return Response.json(particluarData);
}
