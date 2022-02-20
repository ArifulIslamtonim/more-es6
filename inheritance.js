class TeamMember{
    name;
    role = 'Support Web Dev';
    address = 'BD';
    constructor (name, address){
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMember {
   groupSupportTime;
   constructor( name, address, time) {
       super(name, address);
       this.groupSupportTime = time;
   }
    startSession(){
        console.log(this.name, 'startSession a support session');
    }
}

class StudentCare extends TeamMember {
   
    buildARountine(Student){
        console.log(this.name, 'Build a routine for', Student);
    }
}
class NaptuneDebv extends TeamMember{
    codeEditor;
    constructor (name, address, editor){
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'release app version', version);
    }
}

const aamir = new Support('amir khan', 'Bd', 4);
const salman = new Support('solaiman', 'Dubai', 8 );


const alia = new StudentCare('Alia Bhatt', "Mumbai", 9);
const sunnyLeon = new NaptuneDebv('SunnyLeony', "use", 12);
console.log(sunnyLeon);