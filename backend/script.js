
function accessTeacherInfo(){
    fetch('http://localhost:3000/getTeacher/:${name}/')
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

function createTeacher(){
    const username = 
    const password = 

    fetch('http://localhost:3000/createTeacher/:${name}/',{
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

function addStudent(){
    
    let form = document.getElementById("dataForm");
    console.log(form);
    let formData = {};
    for (let i = 0; i < form.elements.length-1; i++) {
        let element = form.elements[i];
        if (element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }
    let jsonData = JSON.stringify(formData);
    let jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.innerHTML = "<pre>" + jsonData + "</pre>";

    console.log(Object.keys(formData));

    console.log(accessInfo());

    
    
}

dragElement(document.getElementById("desk"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.addEventListener("mousedown", dragMouseDown);

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.addEventListener("mouseup", closeDragElement);
        document.addEventListener("mousemove", elementDrag);
    }

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

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.removeEventListener("mouseup", closeDragElement);
        document.removeEventListener("mousemove", elementDrag);
    }
}