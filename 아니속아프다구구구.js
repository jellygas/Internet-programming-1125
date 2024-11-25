class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    intro() {
        document.write("My name: " + this.name + ", age: " + this.age + "<br>");
    }
}

let person1 = new Person("cho", 23);
person1.intro();
