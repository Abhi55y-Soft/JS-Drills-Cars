function problem2 (inventory) {  //return the last item in inventory
        let obj = inventory[(inventory.length)-1]
        return (`Last car is a ${obj['car_make']} ${obj['car_model']}`)        
}
module.exports.problem2 = problem2;