class Zoo {
    constructor(Animal, weight) {
        this.Animal = Animal;
        this.weight = weight;
    }
    Intro() {
        document.write("Animal: " + this.Animal + ", weight: " + this.weight + "<br>");
    }
}
let Animal1 = new Zoo("Cuokka", 95);
Animal1.Intro();