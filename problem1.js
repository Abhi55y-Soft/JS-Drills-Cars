function problem1 (inventory, id) {  //Searching for object with specific id
    for (let i = 0; i < inventory.length; i++) {
        let obj = inventory[i]
        if (obj['id'] == id) {
            return (`Car 33 is a ${obj['car_year']} ${obj['car_make']} ${obj['car_model']}`)
        }
    }
}
module.exports.problem1 = problem1;

