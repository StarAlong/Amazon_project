
class Person {
    name:string
    age: number
    constructor(name:string,age:number) {
    this.name = name
    this.age = age
    }
    speak() {
        console.log(`my name is${this.name}, ${this.age}`)
    }
}

class Student extends Person{
    grade: string
    constructor (name:string, age:number, grade:string) {
        super(name, age)
        this.grade = grade
    }
    study() {
        console.log(`${this.name} is study...`)
    }
}
const p1 = new Person('along', 18, 'gaosan')
console.log(p1)
p1.speak









/*
const src = [1, 2, 3];
const dst = [0];
src.forEach((el) => {
    dst.push(el)
});

src.forEach((el) =>  dst.push(el));

src.map((item)=>{
    return item +1
})


type LogFunc = () => void

const f1:LogFunc = function() {
    return 999
}

let x = f1()
console.log(x)

if (x) {
    
}



type Area = {
    height: number;
    width: number; 
};

type Address = {
    num:number 
    cell:number
    room: string
}

type House = Area & Address
const house: House = {
    height: 100,
    width: 100, 
    num:5,
    cell:6,
    room: '502'

}
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

function walk(data:Direction) {
    if (data === Direction.Up) {
        console.log('upup');
    } else if (data === Direction.Down) {
        console.log('downdown');
    } else if (data === Direction.Left) {
        console.log('leftleft');
    } else if (data === Direction.Right) {
        console.log('rightright');
    } else {
        console.log('unknown');
    }
}
walk(Direction.Down)



let arr1: [string, number]
let arr3: [number, ...string[]]

arr1 = ['hello', 100]
arr3 = [100, 'ab', 'd', 'd', '2321']

const person = {
    name: 'suka',
    age: 18
}

console.log(`my name is ${person.name}, ${person.age} years old`)



let person: {name:string
    age?:number
    [key:string]: any} //索引签名， index signature


person = {name:'tom', age:18, jb:'you'}


let count: (a:number,b:number) => number

count =function(a,b) {
    return a + b
}

let arr1: string[]
let arr2: Array<string>

arr2 = ['hello']

*/
