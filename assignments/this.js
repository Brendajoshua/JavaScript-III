/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The value of "this" in the global scope will be the window or console object.
* 2. Implicit Binding - Whenever a function is called by a preecing dot, the object left of the dot gets "this".
* 3. New Binding - Whenever a constructor function is used, "this" will refer to the specific instance of the object that is created and returned ny the constructor function.
* 4. Explicit Binding - When the 'call' or 'apply' method is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function student (name){
    console.log(this);
    return name;
}
student("Brenda");
// Principle 2

// code example for Implicit Binding
const student = {
    name: 'Brenda',
    class: '4',
    classNextYear: function(){
        return this.class + 1;
    },
}
// Principle 3

// code example for New Binding
function Citizen(name, residence, occupation){
    this.name = name;
    this.residence = residence;
    this.occupation = occupation;
}
let sly = new Citizen('sly', 'Nairobi', 'Teacher')
// Principle 4

// code example for Explicit Binding
var Kenyan = {
    name: 'sly',
    citizenby: 'birth',
    occupation: 'teacher',
    citizen: function(){
    if (this.citizenby === 'birth'){
        return 'citizen';
    }
    return 'non citizen';
    },
};