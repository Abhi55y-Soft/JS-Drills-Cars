function problem4 (inventory) {  //return the list of car years from inventory
    let list = []
    if (inventory.length==0){
        return list
    }
    for (let i =0; i<inventory.length; i++){
        let obj = inventory[i]
        list.push(obj['car_year'])
    }
    return list
}
module.exports.problem4 = problem4;