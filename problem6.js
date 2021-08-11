function problem6 (inventory) {  //return the list of cars of BMW and Audi from inventory
    let list = []
    for (let i =0; i<inventory.length; i++){
        let obj = inventory[i]
        if (obj['car_make'] == 'BMW' || obj['car_make'] == 'Audi'){
            list.push(obj)
        } 
    }
    return list
}
module.exports.problem6 = problem6;