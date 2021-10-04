class Gadget {
    constructor (name, consume){
        this.name = name;
        this.turnedOn = false;
        this.consume = consume;
    }
    getInfo() {
        if (this.turnedOn) {
            return `This ${this.name} is on and consume ${this.consume}`
        } else {
            return `This ${this.name} is off`
        }
    }
}



const oven = new Gadget('oven', 25);
console.log (oven.getInfo());

oven.turnedOn = true;

console.log (oven.getInfo());

const pc = new Gadget ('pc', 54);
console.log (pc.getInfo());

pc.turnedOn =true;

console.log (pc.getInfo());