
import {add, mul} from './demo.js'

console.log(add(1, 2))
console.log(mul(1, 2))


/*
function logData<T, U>(data1:T, data2: U) {
    Date.now() % 2 ? console.log(data1) : console.log(data2)
}

logData<number>(100)
logData<string>('hello')


interface PersonInterface {
    name: string;
    age: number;
    speak(n:number):void
}

class Person implements PersonInterface{
    constructor(
        public name:string,
        public age:number,

    ){}
    speak(n:number): void{
        for (let index = 0; i < n; i++) {
            console.log(`Hi,name is${this.name}, im ${this.age}`);
        }
    }
}



/*
abstract class Package {
    constructor(public weight:number) {}
        // abs method
        abstract calculate(): number
        // (x: number, y: string): void 
        printPackage() {
            console.log(`包裹: ${this.weight}, 运费${this.calculate()}`);
        }
    }
    
    class StandardPackage extends Package {
        constructor(
            weight: number,
            public unitPrice: number
        ) {super(weight)}
        calculate(): number {
            return this.weight * this.unitPrice;           
        }
    }
    class ExpressPackage extends Package {
        constructor(
            weight: number,
            public unitPrice: number,
            public additional: number
        ) {super(weight)}
        calculate(): number {
            return this.weight * this.unitPrice;           
        }
    }

const e1 = new ExpressPackage(13, 9, 2)
e1.printPackage();


const s1 = new StandardPackage(10,5)
s1.printPackage();






/*
class Person {
    // public name:string
    // public age: number
    constructor(protected name:string,readonly age:number) {
    // this.name = name
    // this.age = age
    }
    protected speak() {
        console.log(`my name is${this.name}, ${this.age}`)
    }
}

const p1 = new Person('tom', 18)
p1.name
p1.age = 20
p1.speak()




class Student extends Person{
    grade: string
    constructor (name:string, age:number, grade:string) {
        super(name, age)
        this.grade = grade
    }
    study() {
        console.log(`${this.name} 正在努力学习...`)
    }
    override speak() {
        console.log(`my name is${this.name}, ${this.age}`)
    }
}
const s1 = new Student('along', 18, 'gaosan')
console.log(s1)
s1.study()
s1.speak()

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
