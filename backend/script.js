
function accessInfo(){
    fetch('http://localhost:3000/')
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