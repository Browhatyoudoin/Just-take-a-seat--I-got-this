
function accessTeacherInfo(teacherName){

    const url = 'http://localhost:3000/getTeacher/' + teacherName;
    
    fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function accessPeriodInfo(periodName){

    const url = 'http://localhost:3000/getPeriod/' + periodName;

    fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function accessStudentInfo(studentId){

    const url = 'http://localhost:3000/getStudent/' + studentId;

    fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


function createTeacher(teacherEmail, passcode){

    const username = teacherEmail; 
    const password = passcode; 

    const url = 'http://localhost:3000/createTeacher/' + teacherEmail; 

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username : username, password: password})
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:',error);
    })
}




function createStudent(){

    const id = document.getElementById('id').value;
    const name = document.getElementById('nameIn').value; 
    const grade = document.getElementById('gradeIn').value;

    console.log(id);
    console.log(name);
    console.log(grade);
    
    const url = 'http://localhost:3000/createStudent/' + id; 

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, name: name, grade: grade })
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:',error);
    })
}

/*
function createStudent(){

}
*/
function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

//     function closeDragElement() {
//         // stop moving when mouse button is released:
//         document.removeEventListener("mouseup", closeDragElement);
//         document.removeEventListener("mousemove", elementDrag);
//     }
// }