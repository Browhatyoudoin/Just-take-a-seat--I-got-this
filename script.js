function accessInfo(){
    fetch('/students.json')
        .then((res) => {
            if(!res.ok){
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            console.log(data))
        .catch((error) =>
            console.error("Unable to fetch data:", error));
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
}