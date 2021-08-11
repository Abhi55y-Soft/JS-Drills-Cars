function problem2 (inventory) {  //return the last item in inventory
        let obj = inventory[(inventory.length)-1];
        if (obj){
                return (`Last car is a ${obj['car_make']} ${obj['car_model']}`);
        }
        else{
                return 'List not have element';
        }
               
}
module.exports.problem2 = problem2;