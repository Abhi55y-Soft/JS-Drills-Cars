function problem1 (inventory) {  //Searching for object with id 33
    for (let i = 0; i < inventory.length; i++) {
        let obj = inventory[i]
        if (obj['id'] == 33) {
            return (`Car 33 is a ${obj['car_year']} ${obj['car_make']} ${obj['car_model']}`)
        }
    }
}
module.exports.problem1 = problem1;

