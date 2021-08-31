class Bus{
    constructor() {
        this.bus = {

        }
    }
    on(key, fnc) {
        var target = this.bus[key];
        if (target == undefined) {
            this.bus[key] = [];
        }
        this.bus[key].push(fnc);
    }

    emit(key, ...args) {
        var target = this.bus[key];
        if (Array.isArray(target)) {
            for (var i = 0, len = target.length; i < len; i++){
                var fnc = target[i];
                fnc(...args);
            }
        }
    }
}

var bus = new Bus();
bus.on('hello', (word) => {
    console.log(word);
})

bus.emit('hello', 'hello word');