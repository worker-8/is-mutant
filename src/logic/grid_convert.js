module.exports = (data) => {
    if(!Array.isArray(data)){
        return false;
    }
    return data.map(x => [x]);
};