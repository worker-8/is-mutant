module.exports = (ln) => {
    let flag = false;
    let safe = 0;
    let char = '';

    ln.toUpperCase().split('').forEach(e => {
        if (char === e) {
            char = e;
            safe += 1;
            flag = (safe === 4);
            return;
        } else {
            char = e;
            safe = 1;
            return;
        }
    });
    return flag;
};