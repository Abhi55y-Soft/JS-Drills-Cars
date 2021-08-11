function problem5 (inventory) {  //return the list of car older than 2000 from inventory
    let list = []
    for (let i =0; i<inventory.length; i++){
        let obj = inventory[i]
        if (obj['car_year']<2000){
            list.push(obj)
        } 
    }
    return list
}
module.exports.problem5 = problem5;