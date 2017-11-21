function truthCheck1(collection, pre) {
  return collection.every(function(element) {
    return element[pre] === true || element[pre] == true;
  });
}
console.log("(element[pre] === true || element[pre] == true)");
console.log("True: "+ truthCheck1([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log("True: "+ truthCheck1([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"));
console.log("True: "+ truthCheck1([{"single": "yes"}], "single"));

function truthCheck2(collection, pre) {
  return collection.every(function(element) {
    return element[pre];
  });
}
console.log("(element[pre])");
console.log("True: "+ truthCheck2([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log("True: "+ truthCheck2([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"));
console.log("True: "+ truthCheck2([{"single": "yes"}], "single"));
