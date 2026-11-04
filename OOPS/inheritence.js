
//Single level , multilevel , multiple and heirarchical 
// constructor chaining happens by super keyword

class Animal{

    constructor(name){
        this.name=name;
    }
    sound(){
        console.log("Animal sound");
    }
}
class Cat extends Animal{

    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    sound(){
        super.sound();
        console.log("cat sound");
    }
}
const c=new Cat();
c.sound();


