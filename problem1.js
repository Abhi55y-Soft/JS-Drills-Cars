function problem1 (inventory) {  //Searching for object with id 33
    let result = '';
    for (let i = 0; i < inventory.length; i++) {
        let obj = inventory[i];
        if (obj['id'] == 33) {
            result = `Car 33 is a ${obj['car_year']} ${obj['car_make']} ${obj['car_model']}`;
        }
    }
    if (result){
        return result;
    }
    else{
        return 'No Match';
    }
}
module.exports.problem1 = problem1;

