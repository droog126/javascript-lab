function debounce(func,time) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
            return;
        }
        timer=setTimeout(() => {
            func();
        },time)
    }
}

function torrolt(func, time) {
    var last_time = Date.now();
    return function () {
        let cur_time = Date.now();
        if ((cur_time - last_time) > time) {
            func();
            last_time = cur_time;
        }
    }
}