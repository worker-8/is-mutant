/**
 * is_mutant
 * @param ln<String>
 * @return boolean 
 */
module.exports = (ln) => {
    let flag = false;
    let safe = 0;
    let char = '';

    ln.toUpperCase().split('').forEach(e => {
        if (char === e) {
            char = e;
            safe += 1;
            
            if (safe === 4) {
                // console.log(ln);
                flag = true;
            }
            
            return;
        } else {
            char = e;
            safe = 1;
            return;
        }
    });
    return flag;
};