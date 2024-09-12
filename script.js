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

// function revealBox(){
//     const studentInfo = document.getElementById("studentAdd");
//     studentInfo.addEventListener('click', function(event) {
    
    
//     }
//     )
// }