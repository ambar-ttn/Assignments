"use client"
export default function TeacherForm() {
    function formHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const teacher = Object.fromEntries(formData);

        fetch("http://localhost:3000/api/addTeacher", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(teacher),
        });
    }

    return (
        <div>
            <form onSubmit={formHandler}>

                <label>Teacher Id :  <input type="text" placeholder="Enter your id" name="id" /></label>
                <br></br><br></br>

                <label>Teacher Name:  <input type="text" placeholder="Enter your name" name="name" /></label>
                <br></br><br></br>

                <label>Teacher Subject:  <input type="text" placeholder="Enter your subject" name="subject" /></label>
                <br></br><br></br>

                <button style={{ backgroundColor: "blueviolet" }}>Submit</button>

            </form>
        </div>
    )
}