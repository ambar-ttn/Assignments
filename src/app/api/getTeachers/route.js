import fs from "fs";
import path from "path";


export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "users.json"
  );

  const data = JSON.parse(
    fs.readFileSync(filePath, "utf-8")
  );

  console.log(data.teachers);

  return Response.json(data.teachers);
}
