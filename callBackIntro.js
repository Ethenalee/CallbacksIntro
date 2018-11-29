function findWaldo(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      callback(arr, arr[i]);   // execute callback
    }
  }
}

function actionWhenFound(blank1, blank2) {
  console.log("Found Waldo at index" + blank1.indexOf(blank2) + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);