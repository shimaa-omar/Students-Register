let form = document.getElementById("regist-form")
let empty = document.getElementById("empty")
let students1 = document.getElementById("div2")
let totalStudent = []

form.addEventListener("submit",function(event){
    event.preventDefault();
    empty.style.display="none"
    let student ={
        name : document.getElementById("name").value,
        age : document.getElementById("age").value,
        course : document.getElementById("Course-name").value,
        grade : document.getElementById("grade").value,
        status: function(){
            if(this.grade>=50){
                return "Passed"
            }
            else return "Failed"
        }
    }
    totalStudent.push(student)
    drewStudent()
    this.reset();  //علشان امسح الحقول كلها مرة واحدة
})

function drewStudent(){
    let students = totalStudent.map((e)=>{
        return `<div>
                    <h2 class="name">${e.name}</h2>
                    <p><i class="fa-solid fa-calendar-days"></i>Age: <span class="age">${e.age}</span></p>
                    <p class="course-name"><i class="fa-solid fa-code"></i>${e.course}</p>
                    <p><i class="fa-solid fa-star"></i>Grade: <span class="grade">${e.grade}</span></p>
                    <p>Status: <span id="status">${e.status()}</span></p>
                </div>`
    })
    students1.innerHTML = students.join("")
    
    if(document.getElementById("status").innerHTML === "Passed"){
        document.getElementById("status").style.color = "#4A90E2";
    }else document.getElementById("status").style.color = "red";
}