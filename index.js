const fs = require('fs');
const HTTP = require('http');


fs.readFile('./students.json','utf-8',(err,jsonString) => {
    if(err){
        console.log(err);
    }else{
        if(err){
            console.log(err);
        }else{
            try{
                let data = JSON.parse(jsonString);
                console.log('success');
                data.students[data.students.length]={"please":"work", "jaebal":"yo"};
                console.log(data);
                let newData = JSON.stringify(data);
                fs.writeFile('./students.json',newData, err =>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("file updated")
                    }
                })
               
            }catch(err){
                console.log('error parsing JSON', err); 
                
            }
            
        }
    }
   
    
})

