/**
 * grid_convert
 * @param array
 * @returns array[array]
 */
module.exports = (data) => {
    if(!Array.isArray(data)){
        return false;
    }
    return data.map(x => [x]);
};