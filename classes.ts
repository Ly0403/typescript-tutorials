class Student {
    public name: string;
    protected surname: string;
    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
    getFullName (): number {
        return 5;
    }
}

class SubStudent extends Student{
    constructor(name:string,surname:string){
        super(name,surname);
    }

    getFullName():number{
        return 2;
    }


}



class ChildProperty{
    private _age: number=2;
    private static  _name:number=0;
    constructor(){
        ChildProperty._name++;
    }
    public get age(){
        return this._age;
    }
    public set age(newAge: number){
        if(newAge==4){
            console.log("Yanlış girdi");
        }
        this._age=newAge;
    }

    static getName():number{
        return ChildProperty._name;
    }
}

abstract class Employee{
    constructor(private name:string,private surname:string){
        
    }

    abstract sayHello():string

    sayName():string{
        return `${this.name} ${this.surname}`;
    }
}

class EmployeeClass extends Employee{
    sayHello(): string {
        console.log("Hi");
        return "";   
    }
}

class WorkerClass extends Employee{
    sayHello(): string {
        console.log("Hi Tired People");
        return "";   
    }
}

let newEmployee=new EmployeeClass("Yücel","AYDIN");
let newEmployee2=new WorkerClass("Yücel","AYDIN");
console.log(newEmployee.sayHello());
console.log(newEmployee.sayName());
console.log(newEmployee2.sayHello());
console.log(newEmployee2.sayName());