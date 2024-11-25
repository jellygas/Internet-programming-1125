class Person {
    constructor(gender, height) {
        this.gender = gender;
        this.height = height;
    }
    intro() {
        document.write("My gender: " + this.gender + ", height: " + this.height + "<br>");
            }
}
let person1 = new Person("Man", 186);
person1.intro();