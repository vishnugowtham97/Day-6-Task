//Person Details
class person {
    constructor (name, age, gender, marriedstatus, country = 'India'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.marriedstatus = marriedstatus;
    this.country = country;
    }
    persondetails(){
       return `NAME: ${this.name}, AGE: ${this.age}, GENDER: ${this.gender}, MARRIED STATUS: ${this.marriedststus}, COUNTRY: ${this.country}`
    }
    }
    const vishnu = new person('Vishnu', 25, 'male', 'unmarried', 'India');
    const balu = new person('Balu', 25, 'male', 'unmarried');
    console.log(vishnu.persondetails());
    console.log(balu.persondetails());
    console.log(vishnu, balu);
// output : 
// "NAME: Vishnu, AGE: 25, GENDER: male, MARRIED STATUS: undefined, COUNTRY: India"
// "NAME: Balu, AGE: 25, GENDER: male, MARRIED STATUS: undefined, COUNTRY: India"
// {
//   age: 25,
//   country: "India",
//   gender: "male",
//   marriedstatus: "unmarried",
//   name: "Vishnu"
// }, {
//   age: 25,
//   country: "India",
//   gender: "male",
//   marriedstatus: "unmarried",
//   name: "Balu"
// }
