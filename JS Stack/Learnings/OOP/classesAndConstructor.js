class Hello {
    constructor(name){
        this.name = name
        console.log("Hello, I am Hello constructor")
    }
    heySayIt(to){
        console.log("Hey,", to)
    }
}

class Greetings extends Hello{

    constructor(getout){
        super("No") // -------> Without this javascript will throw an error that you are not creating the instance of the Child class. so please add this keyword to run its constructor.
        this.getOut = getout
        console.log("Hello, I am Greetings constructor")
    }
    sayIt(){
        console.log("Assalam u Alaikum,", this.name)
    }
}

const hi = new Hello("Harry")


const Salam = new Greetings("Sarah")
hi.heySayIt("John")
Salam.sayIt()
