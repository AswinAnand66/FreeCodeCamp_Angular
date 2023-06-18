"use strict";
// Creating Class
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return this.name + " " + this.address;
    }
}
let me = new Employee(1, 'Aswin', 'Chennai');
let nameAddress = me.getNameWithAddress();
console.log('nameAddress:', nameAddress);
console.log(me);
