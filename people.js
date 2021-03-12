const fs = require('fs');

const getPeople = function(){
   return("Your people...");
}

const addPerson = function(name, lastName, phoneNumber, age){
   let peopleBuffer;
   const person = {
      name : name,
      lastname: lastName,
      phoneNumber: phoneNumber,
      age: parseInt(age)
   }
      peopleBuffer = loadPeople();
      peopleBuffer.people.push(person);
      fs.writeFileSync("./people.json", JSON.stringify(peopleBuffer));
} 

function loadPeople(){
   try{
      const dataBuffer = fs.readFileSync('./people.json');
      const dataJSON = dataBuffer.toString();
      return(JSON.parse(dataJSON));
   } catch (err) {
      return({people:[]});
   }
}

module.exports = {
   getPeople,
   addPerson
}