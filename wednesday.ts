let person:string="pakistan"
let age:number=20

if (person == "pakistan"){
    if (age >= 18)
    console.log("you are eligible to cast vote");
    
}
else {
    console.log("you are not able to cast vote");
    
}

let name1:string="Pakistan"
let name2:string="Lahore"
let age2:number=21
let status1:string="married"
 if (name1 == "Pakistan"){
    if (name2 == "Lahore")
    if (age2 >= 18)
    console.log("you have qualified ");
 }
 else if (name1 != "Pakistan") {
    console.log("you can't qualified");
    
 }
 else {
    console.log("quit");
    
 }


 function greet(name1:string, name2:string):string{
return `Welcome, Sir ${name1} and Sir ${name2}`
 }
 let greet5= greet("Zis", "Qasim")
 console.log(greet5);
 


 function math1(num6:number, num7:number, num8:number): boolean{
    return num6+num7+num8 >=100 
 }
 const actual= math1(50, 22, 10)
 console.log(actual);

 
 
 let country:string="Pakistan"
 let age4:number=34
 if (country == "Pakistan"){
    if(age4 >= 18)
    console.log("You can cast vote");
 }
 else  (age4 < 18){
    console.log("you can't cast vote");
    
 }
 

