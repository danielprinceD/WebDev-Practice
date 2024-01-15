let a = {
    name : "daniel" ,
    age : "20" ,
    greet : function()
    {
        console.log("Hi My Name is " + this.name + " ,", this.age,"yrs old");
    } 
}
a.greet()

let create = {
    create(n="Name",a="Age") 
    {
        this.name = n;
        this.age = a;
    },
    getPerson: function()
    {
        console.log(`Hi Iam ${this.name} My age is ${this.age}`);
    } 
}

function Employee(n,a,s)
{
    this.name = n
    this.age = a
    this.sal = s
    this.getDetail = function () 
    {
        console.log("\n ",this.name,"\t",this.age,"\t",this.sal);
    }
}

let daniel = new Employee("daniel",20,20000)
daniel.getDetail()
daniel.name = "doflamingo"
daniel.getDetail()

let obj = new String("daniel")
console.log(obj);

const person = 
{
    name : "daniel",age : 30, sal : 90000
}

for(keys of Object.entries(person))
{
    console.log(keys);

}

duplicate = Object.assign(0,person)
duplicate.name = "David"
for(i of Object.entries(duplicate))
{
    console.log(i);
}

console.log(Math.random()*10);

num = [1,2,3,4,5]
console.log(...num);

console.log(Math.max(...num));

// String

fname = "daniel"
console.log(fname.concat(" ","prince"));

console.log(fname.split(''));

console.log(eval("1+4"));
console.log("1"+1);

const date = new Date()
date.setFullYear(2023);
console.log(date.getFullYear());

myarr = [10,20,30,40]
myarr.unshift("first")
myarr.push("last")
myarr.splice(2,0,"inter")
console.log(...myarr);