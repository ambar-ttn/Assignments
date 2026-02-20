import fs from "fs";
import path from "path";

export async function POST(request) {
  const data = await request.json();

  const filePath = path.join(
    process.cwd(),
    "data",
    "users.json"
  );
  const fileData = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(fileData);

  jsonData.teachers.push(data);

  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

  return Response.json({
    message: "Teacher added successfully",
    teacher: data,
  });
}
