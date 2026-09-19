let primaryKey = 1;

const makePottery = (shape, weight, height) => {
    let pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey ++
    }
    return pottery
}


module.exports = {makePottery};