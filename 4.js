function Turnoff(name){
    this.name=name
}

Turnoff.prototype.getPut = function(put){
    console.log(`This device is off`)
}

function Turnon(name,consumption){
    this.name=name,
        this.consumption=consumption
}

Turnon.prototype.getPut = function(put){
    console.log(`This device is on`)
}


const pc = new Turnoff(`pc`);
console.log(pc)
pc.getPut()

const oven = new Turnon(`oven`,500);
console.log(oven)
oven.getPut()





