"use strict";
const yargs = require('yargs'),
   people = require('./people');

yargs.command({
   command: "add",
   describe:"This command adds a new person",
   builder:{
      name: {
         describe: "name",
         demandOption: true,
         type:"string"
      },
      lastName:{ 
         describe:"last name",
         demandOption: true,  
         type: "string"
      },
      phoneNumber: {
         describe:"phone number",
         demandOption: true,  
         type: "string"
      },
      age: {
         describe:"age",
         demandOption: true,  
         type: "number"
      }
   },
   handler: function(argv){
      people.addPerson(argv.name,argv.lastName,argv.phoneNumber,argv.age);
   }
});

console.log(yargs.argv);

