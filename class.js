class Support {
    name;
    role = 'Support Web Dev';
    address = 'BD';
    constructor (name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'startSession a support session');
    }
}

const aamir = new Support('amir khan', 'Bd');
const salman = new Support('solaiman', 'Dubai' );
console.log(aamir);
console.log(salman);
aamir.startSession();
salman.startSession();