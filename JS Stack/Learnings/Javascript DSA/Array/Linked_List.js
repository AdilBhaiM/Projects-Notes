// Recommended ----  First practice how to use classes in real time then jump into the NodeList aka linkedList concept

class usersAttendance {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        usersAttendance.userCount++;
    }

    static printCount(username) {
        console.log(`Total Users Count is ${this.userCount} and Printer name is ${username}`)
    }

    printUsername() {
        console.log(`Hello my name is ${this.username}`)
    }
}

const Names = ["John", "Stacy", "Micheal"];

for (let name of Names) {
    const currName = new usersAttendance(name)
    currName.printUsername()
}
usersAttendance.printCount("Adil")




// Linked List ========-----------------==========

class Node {
    constructor(data){
        this.data = data,
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

}


new linkedList()
const newNode = new Node(null);

console.log(newNode);