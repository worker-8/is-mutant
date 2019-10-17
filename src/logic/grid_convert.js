/**
 * grid_convert
 * @param data <Array>
 * @return <Array <Array>>
 */
module.exports = (data) => {
    if(!Array.isArray(data)){
        return false;
    }
    return data.map(x => [x]);
};