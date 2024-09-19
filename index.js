const fs = require('fs');

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

/*
fs.appendFile('./students.json','{"losing":"My Mind"}',function(err) {
    if(err) throw err; 
    console.log('added!')
});

to parse the string json file 

if(err){
        console.log(err);
    }else{
        try{
            const data = JSON.parse(jsonString);
            console.log('success');
        }catch(err){
            console.log('error parsing JSON', err);
        }
    }

*/
