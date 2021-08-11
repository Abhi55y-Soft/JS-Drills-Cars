function Sort(list) {   //this is a bubble sort method
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < list.length; i += 1) {
        if (list[i - 1] > list[i]) {
          done = false;
          var tmp = list[i - 1];
          list[i - 1] = list[i];
          list[i] = tmp;
        }
      }
    }
    return list;
}

function problem3 (inventory) {  //return the list of car model from inventory
    let list = []
    for (let i =0; i<inventory.length; i++){
        let obj = inventory[i]
        list.push(obj['car_model'])
    }
    return Sort(list) //sorting the list
}
module.exports.problem3 = problem3;