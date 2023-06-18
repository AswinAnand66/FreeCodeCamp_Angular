// Creating Class

class Employee{

    id:number;
    name:string;
    address:string;

    constructor(id:number, name:string, address:string){
        this.id = id;
        this.name = name;
        this.address = address
    }

    getNameWithAddress(): string{
        return this.name + " " + this.address
    }
}


let me = new Employee(1,'Aswin','Chennai');

let nameAddress = me.getNameWithAddress()
console.log('nameAddress:', nameAddress)

console.log(me)