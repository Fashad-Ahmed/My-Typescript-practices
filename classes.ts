interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();

}

// can USE ACCESS SPECIFIERS

class User implements UserInterface {
    name: string; 
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('user created: ' + this.name);
    }

    register(){
        console.log(this.name + ' is marked.')
    };

    payInvoice(){
        console.log(this.name + 'paid Invoice.')
    }
}

// let harry = new User('harrry potter', 'hg@gtm.com', 15);

// console.log(harry.age);
// harry.register();

class Member extends User{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age); // CALLS THE PARENT CLASS ATTRIBUTES AND NOW NO MORE NEED TO USE this,name = name.
        this.id = id;
    }

    payInvoice(){
        super.payInvoice()
    }
}

let obi: User = new Member(1, 'joek ob', 'jason@jp.com', 20);
obi.register();
obi.payInvoice();